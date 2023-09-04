import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalLinkComponent } from './global-link/global-link.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TittleComponent } from './tittle/tittle.component';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		GlobalLinkComponent,
		NavigationBarComponent,
		TittleComponent
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		GlobalLinkComponent,
		TittleComponent
	],
	imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
