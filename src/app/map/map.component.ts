import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  @Output() clickEvent = new EventEmitter();
  
  onCountryClick(event: any) {
    let elementId: string = (event.target as Element).id;
    console.log(elementId);
  }
  onCountryClick2(value: string) {
    console.log(value);
  }
}
