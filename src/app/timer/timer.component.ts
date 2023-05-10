import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const h1 = document.getElementById('timer') as HTMLHeadingElement;

    var segundo = 0;

    setInterval(() => {
      if (segundo === 60) {
        segundo = 0;
        h1.innerText = `00:0${segundo}`;
      } else {
        segundo++;
        h1.innerText = `00:0${segundo}`;
        if (segundo > 9) {
          h1.innerText = `00:${segundo}`;
        }
      }
    }, 1000);
  }
}
