# Aurelia-With-Bootstrap-Material-Design
This repository is a demonstration for integrating [bootstrap](http://getbootstrap.com/) 
and [bootstrap-material-design](http://fezvrasta.github.io/bootstrap-material-design/) into an Aurelia Typescript project.
This is based off of the [Aurelia Typscript Skeleton](https://github.com/aurelia/skeleton-navigation) and modified to use bootstrap material design.

## How to get Bootstrap Material Design Working
npm modules needed:
* bootstrap
* bootstrap material design
* arrive

The difficult part about getting the ripples to work in Aurelia is making sure that everything loads at the right time. The index.html has to load the CSS first and you have to copy ripples.css into the custom-css folder as a part of the build step. 

### Know Bugs
Currently the build step that is written into the package.json will error and you have to copy ripples.css to the custom-css folder manually.