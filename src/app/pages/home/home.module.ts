import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '../../shared/shared.module';
import { SwiperComponent } from './components/swiper/swiper.component';

@NgModule({
	declarations: [HomeComponent, SearchBarComponent, SwiperComponent],
	exports: [HomeComponent],
	imports: [CommonModule, SharedModule, ReactiveFormsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeContent {}
