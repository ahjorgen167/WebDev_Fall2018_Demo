import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widgetchooser',
  templateUrl: './widgetchooser.component.html',
  styleUrls: ['./widgetchooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  public safeUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=YBpdL9hSac4');
  }

  public getSafeUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=YBpdL9hSac4');
  }


}
