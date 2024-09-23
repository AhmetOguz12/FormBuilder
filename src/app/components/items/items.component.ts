import { Component, Input } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  @Input() connectedDropList!: CdkDropList;

  availableElements = [
    { type: 'text', label: 'Text Input' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'selectItem', label: 'SelectItem' },
    { type: 'image', label: 'Image' },
    { type: 'date', label: 'Date' },
    { type: 'number', label: 'Number' },
    { type: 'radio', label: 'Radio Button' }, // Make sure both label and type are set
  ];
}
