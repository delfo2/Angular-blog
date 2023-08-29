import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HotNewsCardComponent } from './components/hot-news-card/hot-news-card.component';
import { NormalNewsCardComponent } from './components/normal-news-card/normal-news-card.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
	declarations: [
		HotNewsCardComponent,
		NormalNewsCardComponent,
		MainComponent,
	],
	exports: [MainComponent],
	imports: [CommonModule, SharedModule],
})
export class ContentModule {}
