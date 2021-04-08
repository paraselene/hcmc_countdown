import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countdown';
  time: string;
  end = false;
  name: string;
  public constructor() {

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

    const urlParams = new URLSearchParams(window.location.search);
    const countDownTime = urlParams.get('time');
    this.name = urlParams.get('name');
    const countDownDate = new Date('Jan1,2099,00:' + countDownTime).getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.time = '';
      if (minutes === 0 && seconds === 0) {
        this.end = true;
      }
      if (minutes > 0) {
        this.time += minutes + '分';
      }
      this.time += seconds + '秒';
      if (this.end) {
        this.time = '';
      }
    }, 1000);
  }
}
