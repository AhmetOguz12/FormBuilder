import { Component, Input } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent {
  @Input() connectedDropList!: CdkDropList;

  // List of available elements for dragging
  availableElements = [
    { type: 'button', label: 'Button' },
    { type: 'checkbox', label: 'Checkbox' },
    { type: 'date', label: 'Date Picker' },
    { type: 'dropdown', label: 'Dropdown' },
    { type: 'image', label: 'Image' },
    { type: 'input', label: 'Input' },
    { type: 'radio-button', label: 'Radio Button' },
    { type: 'text-area', label: 'Text Area' },
  ];
}
