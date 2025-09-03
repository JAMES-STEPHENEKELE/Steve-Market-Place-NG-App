import { Component, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule

@Component({
  selector: 'app-pfilter',
  templateUrl: './pfilter.component.html',
  styleUrl: './pfilter.component.css'
})
export class PfilterComponent {
  // this is @input property binding or @input decorator. this allow you communicate from the child component to parents componenet
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outStock: number = 0;

  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadioButton: string = 'OutofStock';

  onSelectedFilterRadioButton(){
    // console.log(this.selectedFilterRadioButton)
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }
}