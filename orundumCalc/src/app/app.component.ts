import { Component } from '@angular/core';
import { OrundumInputComponent } from './orundum-input/orundum-input.component'
import { PullsOutputComponent } from './pulls-output/pulls-output.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pulls Calculator';
}
