import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {
  private timer: any;
  private counter: number = 0;
  constructor() { }

  start(){
    if(!this.timer){
      this.timer = setInterval(() => {
        this.counter++;
      }, 1000)
    }
  }

  stop(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  getCounter(){
    return this.timer;
  }
}