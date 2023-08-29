import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-global-link',
  templateUrl: './global-link.component.html',
  styleUrls: ['./global-link.component.css']
})
export class GlobalLinkComponent {
	@Input()
	linkHref = '';
	@Input()
	linkText = '';
}
