import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	constructor(private route: ActivatedRoute) {};

	public query = '';

	ngOnInit(): void {
		this.route.queryParams.subscribe(params => {
			this.query = params['query'];
		})
	}
}
