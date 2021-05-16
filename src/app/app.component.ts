import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Countdown';
  time: string;
  end = false;
  name: string;

  list = ['復活期第二主日', '復活期第三主日', '復活期第四主日', '復活期第五主日', '復活期第六主日', '復活期第七主日', '衛斯理更新主日', '三一主日', '聖靈降臨期第二主日', '聖靈降臨期第三主日', '聖靈降臨期第四主日', '聖靈降臨期第五主日', '聖靈降臨期第六主日', '聖靈降臨期第七主日', '聖靈降臨期第八主日', '聖靈降臨期第九主日', '聖靈降臨期第十主日', '聖靈降臨期第十一主日', '聖靈降臨期第十二主日', '聖靈降臨期第十三主日', '聖靈降臨期第十四主日', '聖靈降臨期第十五主日', '聖靈降臨期第十六主日', '聖靈降臨期第十七主日', '聖靈降臨期第十八主日', '聖靈降臨期第十九主日', '聖靈降臨期第二十主日', '聖靈降臨期第二十一主日', '聖靈降臨期第二十二主日', '聖靈降臨期第二十三主日', '聖靈降臨期第廿四主日', '聖靈降臨期第廿五主日', '基督君王日', '將臨期第一主日', '將臨期第二主日', '將臨期第三主日', '將臨期第四主日', '聖誕期第一主日'];

  public constructor() {

  }

  serviceName(): string {
    const now = new Date().getTime();
    //const now = new Date('Apr19,2021,23:59:00').getTime();
    const reference = 1617537600000;
    const num = Math.floor((now - reference) / (7 * 24 * 3600 * 1000));
    return this.list[num];
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
