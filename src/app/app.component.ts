import {Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent  {
  value = '';

  constructor(public appService: AppService) {
    this.appService.bruteForce();
  }

  valueFromUser(event) {
    this.value = event;
    this.appService.setCurrentStep()
    this.appService.resetComment();

    this.appService.resetBulls();
    this.appService.resetCows();
    this.checkBullCows();
    this.appService.pushSteps();
    this.appService.checkWin();
  }

  checkBullCows() {
    const tmpNum = this.value.split('').map(i => Number(i))
    tmpNum.forEach((item, index) => {
      this.appService.getComputerArr().forEach((computerItem, computerIndex) => {
        if (item === computerItem && index === computerIndex) {
          this.appService.setBulls();
        } else if (item === computerItem && index !== computerIndex) {
          this.appService.setCows();
        }
      })
    })
  }
}
