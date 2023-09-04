import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HotNewsCardComponent } from './components/hot-news-card/hot-news-card.component';
import { NormalNewsCardComponent } from './components/normal-news-card/normal-news-card.component';
import { MainComponent } from './components/main/main.component';
import { ContentComponent } from './content.component';
import { FailComponent } from './components/fail/fail.component';
import { LoadComponent } from './components/load/load.component';

@NgModule({
	declarations: [
		HotNewsCardComponent,
		NormalNewsCardComponent,
		MainComponent,
		ContentComponent,
  FailComponent,
  LoadComponent,
	],
	exports: [ContentComponent],
	imports: [CommonModule, SharedModule],
})
export class ContentModule {}
