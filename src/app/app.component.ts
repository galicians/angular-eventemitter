import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  ringWasPlaced(message: string) { 
    console.log(`Put your hands up: ${message}`);
  } 
}
