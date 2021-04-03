import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countdown';
  time: string;

  public constructor() {

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {

    const urlParams = new URLSearchParams(window.location.search);
    const countDownTime = urlParams.get('time');
    const countDownDate = new Date('Jan1,2099,00:' + countDownTime).getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes: string = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();
      // if (minutes.length < 2) {
      //   minutes = '0' + minutes;
      // }
      // if (seconds.length < 2) {
      //   seconds = '0' + seconds;
      // }
      this.time = minutes + '分' + seconds + '秒';
    }, 1000);
  }
}
