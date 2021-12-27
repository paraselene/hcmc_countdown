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

  list = [
    "聖誕期第二主日", "基督領洗日", "顯現期第二主日", "顯現期第三主日", "顯現期第四主日", //1月
    "顯現期第五主日", "顯現期第六主日", "顯現期第七主日", "顯現期末主日", //2月
    "大齋期第一主日", "大齋期第二主日", "大齋期第三主日", "大齋期第四主日", //3月 
    "大齋期第五主日", "棕枝主日", "救主復活日", "復活期第二主日", //4月 
    "復活期第三主日", "復活期第四主日", "復活期第五主日", "復活期第六主日", "復活期第七主日", //5月 
    "聖靈降臨主日", "三一主日", "聖靈降臨期第二主日", "聖靈降臨期第三主日", //6月 
    "聖靈降臨期第四主日", "聖靈降臨期第五主日", "聖靈降臨期第六主日", "聖靈降臨期第七主日", "聖靈降臨期第八主日", //7月 
    "聖靈降臨期第九主日", "聖靈降臨期第十主日", "聖靈降臨期第十一主日", "聖靈降臨期第十二主日", //8月 
    "聖靈降臨期第十三主日", "聖靈降臨期第十四主日", "聖靈降臨期第十五主日", "聖靈降臨期第十六主日", //9月 
    "聖靈降臨後第十七主日", "聖靈降臨後第十八主日", "聖靈降臨後第十九主日", "聖靈降臨後第二十主日", "聖靈降臨後第二十一主日", //10月 
    "聖靈降臨後第二十二主日", "聖靈降臨期第二十三主日", "基督君王日", "將臨期第一主日", //11月 
    "將臨期第二主日", "將臨期第三主日", "將臨期第四主日", "救主聖誕日" //12月
  ];

  public constructor() {
  }

  serviceName(): string {
    const now = new Date().getTime();
    const reference = 1640602740000; //new Date('Dec27,2021,23:59:00').getTime();
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
