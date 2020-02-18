# Portfolio

A project developed by me using Angular 8 and hosted on [firebase](https://usama-ansari-portfolio.firebaseapp.com/)

## Intention
  ---

The website is developed with an intent to

* Resume
  * Update with the latest skills
  * Made available when required
  * Printable PDF available for download when required

* Update Profile
  * Project Details
  * Social Network

* Website for self
  * About me
  * [Repository link](https://www.bitbucket.org/usama251993)
  * Social Interests

## Task Lists
  ---

- [x] Initialize the repository and project
- [x] Setup Routing, Angular Material and Fontawesome
- [x] Fetch the resume data dynamically
- [ ] Finalize a webpage design
- [ ] Deploy on firebase


### About Commits
  ---

| Commit Message | Changes Committed |
| --- | --- |
| Initial Commit | Committed the project first hand [here](https://www.bitbucket.org/usama251993) |
| Initialized with Angular Material and Fontawesome | Added Fontawesome and Angular Material in the project <br /> [Fontawesome Kit URL](https://kit.fontawesome.com/bcb780d829.js) |
| Fetch resume async-ly and downloaded brand icons | Added Resume Model <br /> Added `portfolio-core-service` <br /> Fetch Resume data dynamically from JSON <br /> Removed application toolbar <br /> Downloaded all the brand icons to be used in the application |
| Removed theme color and optimized for the view | Modified Scrollbar for the entire application <br /> Arranged contents in `<mat-accordion>` <br /> Modified `portfolio-resume-model` |
| Updated skill meter | Fully functional skill meter component generated |
| Working on 404 Page | Traverse on the `/error` route to view the 404 Page <br /> Integrated the `portfolio-meter-component` component with `portfolio-about-component` component <br /> Intend to separate Work Experience, Skills, Certificates and Miscellaneous sections into single components and models <br /> Intend to integrate the modified model with `portfolio-resume-model` |
| Separated Models | Working on 404 Page <br /> New folder added `app/shared` <br /> `app/shared` contains pipes in `app/shared/pipes` and models in `app/shared/models` <br /> `portfolio-resume-model` updated to contain fragmented models <br /> Date pipes have replaced function calls in `portfolio-about-component` |
| New design for app | Included home page for portfolio <br/> Responsive Navigation bar added <br /> Separated `portfolio-icon-model` from models <br /> Separated loader component which is now available in `components/common` <br /> Added pipes as separated shared entities |

### Pending Work
  ---
* 404 Page SVG (can be found in `assets/media/images/404concept.png`)
* Projects section of homepage must be more interesting
* ~~Make the service `portfolio-data-service` usable~~
* Implement `ngRx` for state management
* Responsiveness of the `portfolio-about-component` component layout (__would be deprecated soon__)
* Remove dummy data included in `resume-data.json` for home → projects → grid view implementation
* Let all HTTP calls be in one single service, i.e., `portfolio-core-service` (__done__)
  * ~~This would make the service `portfolio-data-service` redundant~~
  * ~~`mergeMap` / `concatMap` nested HTTP calls~~ (__used forkJoin__)
* Pass the `mResumeData` from `portfolio-home-template-component` to child of `portfolio-home-component` (__done__)
* Shift the center of indicator circle or adjust the viewbox dynamically to prevent clutter at the bottom of SVG
* Refer Feedback heading for upcoming tasks
* Design a credits page for asset credits to different authors of contents ised in the website

### Current Status  
  ---
* `portfolio-about-component` is about to be deprecated
* Created child components of `portfolio-home-component`
  * `portfolio-introduction-component`
  * `portfolio-projects-component`
  * `portfolio-skills-component`
  * `portfolio-contact-component`

* Deleted non-nested bloated components
  * `portfolio-projects-component`
  * `portfolio-skills-component`
* ~~`portfolio-strings-service` renamed to `portfolio-assets-service`~~
* Used forkJoin which renders `portfolio-assets-service` redundant

### Completed
  ---
* Minor changes in Navbar
* Components loaded dynamically in `portfolio-home` component
* All HTTP calls present in `portfolio-core-service`
* Scrolling
  * Dynamic components scroll on click works correctly
  * Scroll to top works correctly
* `portfolio-meter-component` and `portfolio-error-component` moved to `component/common` folder
* Optimized `portfolio-meter-component` and updated with `mat-select`
* `portfolio-about-component` is viewable only for wider viewports

### Feedback
  ---
* Modularize every component
* Each component must have an interface of its own
* Each component can access shared interface
* Implement nesting of components
* Separate modules for:
  * Home Page
  * Documents
  * Photo Collection
* `portfolio-meter-component` heavily demands a new look and feel
  - Must display an overview of skills
  - Enhance user interaction
* Only home page module must be loaded at startup
* `ngFor` must be used wisely
  * If a component has a lot of information to display
    - Seggregate the component in atomic child components
    - Wrap them in parent component
    - Use `@Input()` and `@Output()` decorators to pass data
  * To iterate over simple arrays directly in a component
* Run `ng build --prod` before deployment


### References and Inspirations
  ---

| Design | Reference |
| --- | --- |
| Homepage | [Medium](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/) <br /> [Matt Farley](https://mattfarley.ca/) |
| Navigation Bar | [Prollective](https://www.prollective.com/) |
| Project section on homepage | [Ian Lunn](https://ianlunn.co.uk/) |
| 404 Page | [Codepen](https://codepen.io/janmez/pen/LJOdar) |
| Dynamically loading components | [Medium](https://medium.com/calyx/angular-dynamic-components-ffd16947fbef) <br /> [Angular Docs](https://angular.io/guide/dynamic-component-loader) <br /> [Indepth](https://indepth.dev/here-is-what-you-need-to-know-about-dynamic-components-in-angular/)