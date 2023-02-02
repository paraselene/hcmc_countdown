import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '倒數';
  time: string;
  end = false;
  name: string;

  public constructor() {
  }

  serviceName(): string {
    //const now = new Date();
    const now = new Date('Jan8,2023,14:00:00');
    const now_timestamp = now.getTime();
    const reference_timestamp = new Date('Dec25,2022,00:00:00').getTime();
    const week = Math.floor((now_timestamp - reference_timestamp) / (7 * 24 * 3600 * 1000));
    const name = ((now.getDate()) < 7) ? "聖餐" : "";
    return "第" + week + "週"+ name;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const countDownTime = urlParams.get('time') || '00:00';
    this.name = urlParams.get('name') || this.serviceName();
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
