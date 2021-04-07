import { Component } from '@angular/core';

@Component({
  //Equivalent to document.getElementById('app-root')
  selector: 'app-root',
  //This is grabbing the component we want to use.
  templateUrl: './app.component.html',
  //This is the style we want to use for the component.
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-project';
}
