import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  value = '';
  error = '';

  compValue(event) {
    this.value = event.target.value;
  }

  @Input() blockClick;
  @Output() inputValue = new EventEmitter();

  checkValue() {
    const tmpNum = this.value.split('').map(i => Number(i))
    if (tmpNum.length !== 4 || tmpNum.some(char => isNaN(char))) {
      this.error = 'Ход - это четырехзначное число'
    } else {
      this.error = '';
      this.inputValue.emit(this.value);
    }
    this.value = '';
  }
}
