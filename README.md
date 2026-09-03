# VHDL Cookbook

A lightweight web-based VHDL template browser designed to accelerate FPGA and HDL development.

The application provides a searchable collection of ready-to-use VHDL templates that can be copied with a single click.

## Features

- Fixed navigation panel
- Template search functionality
- One-click copy to clipboard
- Visual copy confirmation
- Pure HTML, CSS, and JavaScript
- No dependencies
- Works entirely offline
- Easy to extend with new VHDL blocks

## Current Templates

### Project Templates
- VHDL Project Template

### Sequential Logic
- Register (D, set/preset, latches, T/JK/SR)
- Shift Registers (SISO, SIPO, PISO, PIPO, universal, ring/Johnson, LFSR, barrel)
- Counters (up, down, modulo-N, up/down, load/enable, saturating, Gray-code, BCD, one-shot timer, periodic tick)

### Finite State Machines
- Moore FSM (two-process)
- Mealy FSM (two-process)
- Moore FSM with registered outputs (three-process)
- Safe FSM (illegal-state recovery)
- State encoding (one-hot / binary / gray)

### Memory
- RAM (single-port, simple & true dual-port)
- ROM (inline initialization)
- Synchronous FIFO

## Planned Templates

### Interfaces
- UART RX
- UART TX
- SPI Master
- SPI Slave
- I2C Master
- I2C Slave

### Utilities
- Debouncer
- Synchronizer
- Edge Detector
- Clock Divider

### Verification
- Testbench Template
- Clock Generator
- Reset Generator
- Stimulus Process

## Screenshot

Coming soon.

## Running Locally

Simply open the HTML file in your browser:

```text
index.html
```

No installation is required.

## GitHub Pages Deployment

This project can be deployed using GitHub Pages.

1. Create a GitHub repository.
2. Upload `index.html`.
3. Go to:

```text
Settings → Pages
```

4. Select:

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

5. Save.

Your application will be available at:

```text
https://<your-username>.github.io/<repository-name>/
```

## Project Goal

The purpose of this project is to create a fast-access VHDL cookbook where common HDL structures can be found, reviewed, and copied without searching through documentation or previous projects.

The focus is on practical and reusable FPGA design patterns.

## Contributing

Suggestions for new templates are welcome.

Potential future additions:

- Syntax highlighting
- Dark/Light theme selection
- Favorites
- Categories with collapsible menus
- Parameterized templates
- Entity name generation
- Download template as file

## License

MIT License

Feel free to use, modify, and distribute this project.
