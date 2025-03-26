# Zach's Retro Desktop Portfolio

**THIS IS A WORK IN PROGRESS!!!**

## Accessibility

I also maintain my old portfolio, created using the HAXCMS open source content management system. This portfolio is maintained for ease of use, accessibility, and better readability. If you wish to view this portfolio, click here (when the URL is updated that is).

## Description

My personal website project that serves both as my portfolio and an online toolbox with a retro theme.

## Tech Stack / Development Tools

| Tool | Purpose & Description |
| ---- | --------------------- |
| ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) | **[Angular](https://angular.dev/)**: Front-end framework used to handle the building, routing, and numerous other aspects of this web app. |
| ![Lit](https://img.shields.io/badge/lit-4c64ff.svg?style=for-the-badge&logo=lit&logoColor=white) | **[Lit](https://lit.dev/docs/)**: Web-component library used for creation of some individual "programs" in the website that don't need to interact with the rest of the system. Creating web components helps to keep these "programs" containerized so they are less likely to introduce any bugs anywhere else. Programs that use Lit will be listed here when they are added. |
| ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) | **[Typescript](https://www.typescriptlang.org/)**: Language used by Angular to handle all logic related tasks. |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Utilized in some Lit web-components, mainly for any where utilizing TypeScript was not necessary. |
| ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**: Structure of overall web app, individual "web pages" in the browser, and structure of web components. |
| ![SCSS](https://img.shields.io/badge/scss-%23cf649a.svg?style=for-the-badge&logo=sass&logoColor=white) | **[SCSS](https://sass-lang.com/documentation/syntax/)**: Used in Angular for styling, enabling better developer experience than using plain CSS across the entire web app. |
| ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) | **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Utilized in Lit web components to handle containerized styling of the web components. |
| ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) | **[Vercel](https://vercel.com/)**: Web hosting, speed analytics, usage insights. |
| ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) | **[CloudFlare](https://www.cloudflare.com/)**: Domain name services. |
| ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) | **[GitHub](https://github.com/zdodson21/retro-desktop-portfolio)**: Git repository cloud service. |

## Web Component Repos

Some aspects of this web application are created using external web-components, hosted in other repositories. Those will be listed here.

## Don't Portfolios with this theming already exist?

Yes, but it's the theme I liked, and I thought it would challenge me the most to recreate (it did). I also wanted to aim for a more "authentic" experience than I saw from any other Windows 95 themed portfolio. This was also a good chance to learn how to use a modern framework such as Angular.

## Project Goals:

* Prioritize developer experience combined with expansiveness to ensure expanding upon this web application is simple in the future.
  * Say I need to add another "web page" to document a project I have completed. I want it to be simple to incorporate a way to access that page into this web application.
* Replicate the Windows 95 look & feel as much as possible, not just the look. A lot of time was put in to making this web app feel authentic. Obviously the speed in which "programs" and "web pages" load will certainly be faster here.

---

# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
