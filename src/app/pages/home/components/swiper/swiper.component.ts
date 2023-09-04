import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

import { register } from 'swiper/element/bundle';

@Component({
	selector: 'app-swiper',
	templateUrl: './swiper.component.html',
	styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {
	ngOnInit(): void {
		register();
		new Swiper(".mySwiper", {
			centeredSlides: true,
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			loop: true,
			pagination: {
				clickable: true,
			},
			spaceBetween: 0,
			slidesPerView: 3
		});
	}
}
