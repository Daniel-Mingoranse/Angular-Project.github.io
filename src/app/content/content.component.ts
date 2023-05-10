import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public timer: TimerService) {
    this.timer.start();
   }

  ngOnInit() {
  }

}