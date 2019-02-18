import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-selector',
  templateUrl: './random-selector.component.html',
  styleUrls: ['./random-selector.component.css']
})
export class RandomSelectorComponent implements OnInit {
  choices: string[] = [];
  newChoice: string;
  result = '';
  date = Date.now();


  constructor() { }

  ngOnInit() {
  }

  addNewChoice() {
    if (this.newChoice !== '') {
      this.choices.push(this.newChoice);
      this.newChoice = '';
    }
  }

  deleteChoice(index: number) {
    this.choices.splice(index, 1);
  }

  selectChoice() {
    this.result = this.choices[Math.floor(Math.random() * this.choices.length)];
  }
}
