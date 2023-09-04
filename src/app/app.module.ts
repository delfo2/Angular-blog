import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentModule } from './pages/content/content.module';
import { HomeContent } from './pages/home/home.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ContentModule,
		HttpClientModule,
		HomeContent,
	],
	providers: [],
	schemas: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
