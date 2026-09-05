const fs = require("fs");
const vm = require("vm");
const html = fs.readFileSync("index.html", "utf8");
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) { console.error("main script not found"); process.exit(1); }
const code = m[1];
try {
    new vm.Script(code);   // syntax check only (no DOM execution)
    console.log("JS syntax: OK");
} catch (e) {
    console.error("JS syntax ERROR:", e.message);
    process.exit(1);
}
const count = (s, pat) => s.split(pat).length - 1;
console.log(`templates=${count(code, 'title: "')} groups=${count(code, 'group: "')} code-blocks=${count(code, "code: `")} diagrams=${count(code, "diagram:")}`);
const probes = [
    // [pattern, label, expected count]
    ['inputs: ["async_in"], out: "sync_out"', "two-FF diagram labels aligned", 1],
    ['inputs: ["pulse_in"], out: "pulse_out"', "pulse-sync diagram labels aligned", 1],
    ['out: "rst_sync_n"', "reset-sync diagram label aligned", 1],
    ['out: "clk_div2"', "divide-by-2 diagram label aligned", 1],
    ['out: "clk_div"', "divide-by-N diagram label aligned", 1],
    ['inputs: ["data_out", "oe"]', "tri-state diagram inputs aligned", 1],
    ["qr <= seed", "LFSR seed usage removed", 0],
    ["(shr'range =>", "shr'range aggregates removed", 0],
    ["clk_d2", "old div2 label removed", 0],
    ["clk_dN", "old divN label removed", 0],
    ['out: "rst_n"', "old reset-sync label removed", 0],
    ['inputs: ["async"],', "old two-FF label removed", 0],
    ['inputs: ["p_in"]', "old p_in label removed", 0],
    ["WIDTH - 1 downto 0", "spaced WIDTH range removed", 0],
    ["N - 1 downto 0", "spaced N range removed", 0],
    ["signal d_r : std_logic;", "uninitialized d_r removed", 0],
    ["clk : in std_logic;", "old unaligned project port removed", 0],
    ["ADDR_W = ceil(log2(DEPTH))", "stale RAM comment removed", 0],
];
let ok = true;
for (const [pat, label, expected] of probes) {
    const n = count(code, pat);
    const pass = n === expected;
    ok = ok && pass;
    console.log(`${pass ? "PASS" : "FAIL"}  ${label}: ${n} (expected ${expected})`);
}
console.log("TB port map present:", /port map \(clk => clk, rst => rst, d => d, q => q\)/.test(code));
console.log("project entity has d/q ports:", /d   : in  std_logic_vector\(7 downto 0\)/.test(code));
console.log(ok ? "ALL PROBES PASSED" : "SOME PROBES FAILED");
process.exit(ok ? 0 : 1);