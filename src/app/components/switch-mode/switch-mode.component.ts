import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-mode',
  templateUrl: './switch-mode.component.html',
  styleUrls: ['./switch-mode.component.css'],
})
export class SwitchModeComponent {
  body = document.body;

  constructor() {}

  toggleMode(event: any) {
    const isChecked = event.target.checked;

    if (isChecked) {
      console.log('add light-theme class');
      this.body.classList.add('light-theme');
    } else {
      console.log('remove light-theme class');
      this.body.classList.remove('light-theme');
    }
  }
}
