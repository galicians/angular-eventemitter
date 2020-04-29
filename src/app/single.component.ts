import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'single-component',
  templateUrl: './single.component.html'
})

export class SingleComponent {
  @Output() putRingOnIt: EventEmitter<string>

  constructor() {
    this.putRingOnIt = new EventEmitter();
  }

  liked(): void {
    console.log('liked');
    this.putRingOnIt.emit('oh oh oh')
  }

}