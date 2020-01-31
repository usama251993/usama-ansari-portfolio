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

* [x] Initialize the repository and project
* [x] Setup Routing, Angular Material and Fontawesome
* [x] Fetch the resume data dynamically
* [ ] Deploy on firebase


### About Commits
  ---

| Commit Message | Changes Committed |
| --- | --- |
| Initial Commit | Committed the project first hand [here](https://www.bitbucket.org/usama251993) |
| Initialized with Angular Material and Fontawesome | Added Fontawesome and Angular Material in the project <br /> Fontawesome kit code: https://kit.fontawesome.com/bcb780d829.js |
| Fetch resume async-ly and downloaded brand icons | Added Resume Model <br /> Added `PortfolioCoreService` <br /> Fetch Resume data dynamically from JSON <br /> Removed application toolbar <br /> Downloaded all the brand icons to be used in the application |
| Removed theme color and optimized for the view | Modified Scrollbar for the entire application <br /> Arranged contents in `<mat-accordion>` <br /> Modified `portfolio-resume-model` |
| Updated skill meter | Fully functional skill meter component generated |
| Working on 404 Page | Traverse on the `/error` route to view the 404 Page <br /> Integrated the `portfolio-meter` component with `portfolio-about` component <br /> Intend to separate Work Experience, Skills, Certificates and Miscellaneous sections into single components and models <br /> Intend to integrate the modified model with `portfolio-resume-model` |
