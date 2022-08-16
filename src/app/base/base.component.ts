import { Component } from '@angular/core';
import { faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  home = faHome;
  about = faQuestionCircle;
}
