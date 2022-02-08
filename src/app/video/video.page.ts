import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  videoUrl = 'https://www.youtube.com/embed/gALH3SXwnVk';
  urlConfiable: SafeUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlConfiable = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/gALH3SXwnVk');
  }

}
