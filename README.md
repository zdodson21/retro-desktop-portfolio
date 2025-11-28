# Zach's Website

[Website URL](https://zachdodson.me)

## Description

This website serves the purpose of being my portfolio as well as a sandbox to try new skills. Some aspects of this codebase (such as Electron) are unnecessary for this website, but were incorporated to learn how to utilize them. If something seems out of place, it is likely included so I could learn how to use it.

---

## Tech Stack / Development Tools

[View tech stack here](https://zachdodson.me/programs?internet-explorer=retro-desktop-portfolio)

### Web Component Repos

Some aspects of this web application are created using external web-components, hosted in other repositories. These will be listed here when they are created.

---

### Installing Dependencies

To install dependencies, run the following:

```bash
npm install
```

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` (or the localhost URL provided by Angular if port 4200 is currently in use). The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

The Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

OR

```bash
ng g c component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

### More commands

More commands can be viewed in the `package.json` file.

### Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## WebAssembly

Some code for this project is written in C and compiled to WebAssembly to handle backend computational logic. One program that uses this is the [Calculator](https://github.com/zdodson21/retro-desktop-portfolio/tree/main/src/components/programs/calculator) program.

Use the following command(s) to compile WebAssembly projects from C using [GNU Make](https://www.gnu.org/software/make/), [Emscripten](https://emscripten.org/), and [GNU C Compiler](https://gcc.gnu.org/)

```bash
# Calculator
make calculator
```

Use the following command(s) to compile C Testing Programs (output into root of project, automatically git ignored):

```bash
make test-calculator
```

---

## CI/CD (GitHub Actions)

To view code for currently configured Actions visit the [workflows folder in this repository](https://github.com/zdodson21/retro-desktop-portfolio/tree/main/.github/workflows).

Use the following command to run test actions locally using native commands:

```bash
npm run actions:native
```

You can also use [act](https://nektosact.com/).

**Note:** You must have docker installed to use act. You can figure out how to install Docker for your system [here](https://www.docker.com/).

### Build

Default build command:

```bash
npm run build
```

Use the following command to run the build action locally:

```bash
act --job build
```

### Test

You can utilize the following test commands:

```bash
# Standard testing, opens Chrome
npm run test

# Headless testing
npm run test:hl

# Headless testing, does not watch for changes
npm run test:hlnw

# Testing using the GitHub Actions configuration file
npm run test:ci

```

Use the following command to run the test action locally using [act](https://github.com/nektos/act):

Note: This may not work due to issues with reliance on Google Chrome for testing.

```bash
act --job test
```

---

## Docker

This project can be built and run locally as a docker container!

Run the following command to easily build and run the docker container locally:

```bash
# Build container
npm run docker:build

# Run container
npm run docker:run
```

From there you can access this project in your browser at either the network address provided by the container or at [localhost:5200](http://localhost:5200)

**Note:** Any self-built container serves as an offline-only method of accessing this web application, so any features that require a connection to a server will not function.

---

## Capacitor (Mobile App Building)

### Android Building

To sync project:

```bash
npm run cap:sync
```

To start Android app (must utilize JDK21 and emulator must be configured through Android Studio):

```bash
npm run cap:start
```

To build Android app:

1. Open Android Studio
2. In the top tool bar, click on `Build > Generate App Bundles or APKs > Generate APKs`
3. Move the built APK onto your phone, install it (you may have to configure your settings to install apps from "unsupported" sources).

## Electron

**Note:** If you complete any local builds of this project as an Electron application, you will be missing any environment variables required for signing and live server / database features. Local builds of this project not provided through an official source (such as GitHub) should be considered "offline-only" builds.

### Development

To build and run this project as an electron app, run the following command:

```bash
npm run electron:start
```

### Build for Various Systems

#### Linux

To build for Linux based systems, run the following:

```bash
npm run forge:linux
```

This will build the program into `.deb` and `.rpm` based installers

#### Windows

To build for Windows based systems, run the following:

```powershell
npm run forge:windows
```

There is a known issue where you may need to run the following command, then re-run the above command:

```powershell
npm run forge:start
```

A fix is being researched for this bug to ensure the installer works properly in the future

#### macOS

To build for macOS systems, run the following:

```bash
npm run forge:mac
```

---

## Is This Repository Open Source?

No. Because this is my portfolio web application, which contains numerous aspects (such as pictures and descriptions) of my life and projects, this repository is not open source. It is "code-available", meaning anyone can view the code to see how all the pieces function, but no one is permitted to copy, modify, or redistribute this code without my permission.
