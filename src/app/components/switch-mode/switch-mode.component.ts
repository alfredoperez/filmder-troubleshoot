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
      this.body.classList.remove('light-theme');
    } else {
      this.body.classList.add('light-theme');
    }
  }
}
