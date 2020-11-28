import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  currentStep = 0;
  comment = '';
  disable = false;
  bulls = 0;
  cows = 0;
  steps = [];
  computerArr = [];


  bruteForce() {
    let randomNumber;
    while (this.computerArr.length < 4) {
      randomNumber = Math.floor(Math.random() * 10);
      if (!this.computerArr.includes(randomNumber)) {
        this.computerArr.push(randomNumber);
      }
    }
  }

  getComputerArr() {
    return this.computerArr;
  }

  setComputerArr() {
    this.computerArr = [];
  }

  getBulls() {
    return this.bulls;
  }
  getCows() {
    return this.cows;
  }
  getSteps() {
    return this.steps;
  }

  getComment() {
    return this.comment;
  }

  getDisable() {
    return this.disable;
  }

  setCurrentStep() {
    this.currentStep += 1;
  }

  resetComment() {
    this.comment = '';
  }

  resetCurrentStep() {
    this.currentStep = 0;
  }

  resetBulls() {
    this.bulls = 0;
  }

  resetCows() {
    this.cows = 0;
  }

  resetSteps() {
    this.steps = [];
  }

  pushSteps(value) {
    this.steps.push(`Ход ${this.currentStep}, веденое число ${value}: быков ${this.bulls}, коров: ${this.cows}`);
  }

  setBulls() {
    this.bulls += 1;
  }

  setCows() {
    this.cows += 1;
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

  resetGame() {
    this.setComputerArr();
    this.resetCurrentStep();
    this.disable = false;
    this.bruteForce();
    this.resetSteps();
  }
}
