# Portfolio

A project developed by me using Angular 8 and hosted on firebase [here](https://usama-ansari-portfolio.firebaseapp.com/)

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
- [ ] Deploy on firebase


### About Commits
  ---

| Commit Message | Changes Committed |
| --- | --- |
| Initial Commit | Committed the project first hand [here](https://www.bitbucket.org/usama251993) |
| Initialized with Angular Material and Fontawesome | Added Fontawesome and Angular Material in the project <br /> [Fontawesome Kit URL](https://kit.fontawesome.com/bcb780d829.js) |
| Fetch resume async-ly and downloaded brand icons | Added Resume Model <br /> Added `PortfolioCoreService` <br /> Fetch Resume data dynamically from JSON <br /> Removed application toolbar <br /> Downloaded all the brand icons to be used in the application |
| Removed theme color and optimized for the view | Modified Scrollbar for the entire application <br /> Arranged contents in `<mat-accordion>` <br /> Modified `portfolio-resume-model` |
| Updated skill meter | Fully functional skill meter component generated |
| Working on 404 Page | Traverse on the `/error` route to view the 404 Page <br /> Integrated the `portfolio-meter` component with `portfolio-about` component <br /> Intend to separate Work Experience, Skills, Certificates and Miscellaneous sections into single components and models <br /> Intend to integrate the modified model with `portfolio-resume-model` |
| Separated Models | Working on 404 Page <br /> New folder added `app/shared` <br /> `app/shared` contains pipes in `app/shared/pipes` and models in `app/shared/models` <br /> `portfolio-resume-model` updated to contain fragmented models <br /> Date pipes have replaced function calls in `portfolio-about-component` |
| New design for app | Included home page for portfolio <br/> Responsive Navigation bar added <br /> Separated `portfolio-icon-module` from models <br /> Separated loader component which is now available in `components/common` <br /> Added pipes as separated shared entities |

### Pending Work
  ---
* 404 Page SVG (can be found in `assets/media/images/404concept.png`)
* Projects section of homepage must be more interesting
* Make the service `portfolio-data-service` usable
* Implement `ngRx` for state management
* Responsiveness of the `portfolio-about` component layout
* Remove dummy data included in `resume-data.json` for home → projects → grid view implementation

### References and Inspirations
  ---

| Design | Reference |
| --- | --- |
| Homepage | [Medium](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/) <br /> [Matt Farley](https://mattfarley.ca/) |
| Navigation Bar | [Prollective](https://www.prollective.com/) |
| Project section on homepage | [Ian Lunn](https://ianlunn.co.uk/) |
| 404 Page | [Codepen](https://codepen.io/janmez/pen/LJOdar) |