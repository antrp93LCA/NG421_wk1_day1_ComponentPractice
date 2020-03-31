import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.css']
})
export class MessagePreviewComponent implements OnInit {

    image: "http://placehold.it/50x50";
  constructor() { }

  ngOnInit() {
  }

}
