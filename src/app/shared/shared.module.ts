import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GlobalLinkComponent } from './global-link/global-link.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalLinkComponent
  ],
  exports: [
	HeaderComponent,
    FooterComponent,
	GlobalLinkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
