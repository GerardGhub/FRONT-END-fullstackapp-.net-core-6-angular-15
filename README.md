# Fullstackapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Angular CRUD WITH .NET CORE

//Previous setup before updating 
ng --version 12 - 14
dotnet --version 7
node --v 16.6 - 18.12

npm uninstall -g @angular/cli

npm install -g @angular/cli@latest
ng version

Angular CLI: 15.0.4
Node: 18.12.1
Package Manager: npm 8.19.2
OS: win

<<add folder>>
client folder
ng new fullstackapp
? Would you like to add Angular routing? (y/N)  y 
stylesheet - i prepared scss

cd src/app/components/employees
ng g c employees-list


add dependecies 
Microsoft entity framework core sql server
and Microsoft Entity Framework tools 


Add-Migration "Initial Migration"

Update-Database

ng g s employees
ng g c add-employee
ng g c edit-employee




