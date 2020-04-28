import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'single-component',
  templateUrl: './single.component.html'
})

export class SingleComponent {
  @Output() putRingOnit: EventEmitter<string>

  constructor() {
    this.putRingOnit = new EventEmitter();
  }

  liked(): void {
    this.putRingOnit.emit('oh oh oh')
  }

}