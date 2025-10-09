# Zach's Website

[Website URL](https://retro-desktop-portfolio.vercel.app)

## Description

This website serves the purpose of being my portfolio as well as a sandbox to try new skills. Some aspects of this codebase (such as Electron) are unnecessary for this website, but were incorporated to learn how to utilize them. If something seems out of place, it is likely included so I could learn how to use it.

---

## Tech Stack / Development Tools

| Tool | Purpose & Description |
| ---- | --------------------- |
| ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) | **[Angular](https://angular.dev/)**: Front-end framework used to handle the building, routing, and numerous other aspects of this web app. |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | **[Typescript](https://www.typescriptlang.org/)**: Language used by Angular to handle all logic related tasks. |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**: Structure of overall web app, individual "web pages" in the browser, and structure of web components. |
| ![SCSS](https://img.shields.io/badge/scss-%23cf649a.svg?style=for-the-badge&logo=sass&logoColor=white) | **[SCSS](https://sass-lang.com/documentation/syntax/)**: Used in Angular for styling, enabling better developer experience than using plain CSS across the entire web app. |
| ![Jasmine](https://img.shields.io/badge/jasmine-%238A4182.svg?style=for-the-badge&logo=jasmine&logoColor=white) | **[Jasmine](https://jasmine.github.io/)**: TypeScript testing. |
| ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) | **[Prettier](https://prettier.io/)**: Code formatting.|
| ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) | **[GitHub Actions](https://docs.github.com/en/actions)**: CI/CD |
| ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) | **[Vercel](https://vercel.com/)**: Web hosting, speed analytics, usage insights. |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) | **[CloudFlare](https://www.cloudflare.com/)**: Domain name services. |
| ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) | **[GitHub](https://github.com/zdodson21/retro-desktop-portfolio)**: Git repository cloud service. |
| ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) | **[Docker*](https://www.docker.com/)**: Containerization|
| ![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) | **[Electron*](https://www.electronjs.org/)**: Desktop App|
| ![Aseprite](https://img.shields.io/badge/Aseprite-FFFFFF?style=for-the-badge&logo=Aseprite&logoColor=#7D929E) | **[Aseprite](https://www.aseprite.org/)**: Icon recreation. |
| ![Gimp Gnu Image Manipulation Program](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF) | **[GIMP](https://www.gimp.org/)**: Icon recreation and file type conversion. |

\* - Feature not required for typical website development / operation (added solely to gain a better understanding).

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

## Can I Contribute to this Repository?

No*. I will not be accepting any pull requests submitted to this repository (not that I expect any for a personal website). However, if you have a suggestion for how code could be written better, you are welcome to submit a pull request. Any pull requests or issues submitted will be taken as suggestions, and no pull requests will be merged.
