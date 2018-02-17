import { Component, OnInit } from '@angular/core';
import {GifService} from '../../../services/gif.service.client';



@Component({
  selector: 'app-widget-gif',
  templateUrl: './widget-gif.component.html',
  styleUrls: ['./widget-gif.component.css']
})
export class WidgetGifComponent implements OnInit {

  public gifLink: string;
  public searchString: string;

  constructor(private gifService: GifService) { }

  ngOnInit() {}

  public searchGif(query: string): void {
    this.gifService.getURLLink(query)
      .subscribe(data => {
        this.gifLink = data.data.image_original_url;
      });
  }

}
