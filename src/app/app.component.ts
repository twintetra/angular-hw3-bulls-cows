import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  value = '';
  comment = '';
  computerArr = [];
  disable = false;

  currentStep = 0;
  bulls = 0;
  cows = 0;
  steps = [];

  valueFromUser(event) {
    this.value = event;
    this.currentStep += 1;
    this.comment = '';
    this.bulls = 0;
    this.cows = 0;
    this.checkBullCows();
    this.steps.push(`Ход ${this.currentStep}: быков ${this.bulls}, коров: ${this.cows}`);
    this.checkWin();
  }

  checkBullCows() {
    const tmpNum = this.value.split('').map(i => Number(i))
    tmpNum.forEach((item, index) => {
      this.computerArr.forEach((computerItem, computerIndex) => {
        if (item === computerItem && index === computerIndex) {
          this.bulls += 1;
        } else if (item === computerItem && index !== computerIndex) {
          this.cows += 1;
        }
      })
    })
  }

  checkWin() {
    if (this.bulls === 3) {
      this.comment = 'Сильный ход!';
    }
    if (this.bulls === 4) {
      this.comment = `Победа!!! Ходов сделано: ${this.currentStep}`;
      this.disable = true;
    }
  }

  bruteForce() {
    let randomNumber;
    while (this.computerArr.length < 4) {
      randomNumber = Math.floor(Math.random() * 10);
      if (!this.computerArr.includes(randomNumber)) {
        this.computerArr.push(randomNumber);
      }
    }
  }

  resetGame() {
    this.computerArr = [];
    this.currentStep = 0;
    this.disable = false;
    this.bruteForce();
    this.steps = [];
  }

  constructor() {
    this.bruteForce();
  }
}
