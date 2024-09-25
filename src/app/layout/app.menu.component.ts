import { Component, Input, OnInit } from '@angular/core';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropService } from '../services/drag-drop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  @Input() connectedDropList!: CdkDropList;

  availableElements = [
    {
      type: 'button',
      label: 'Submit',
      buttonColor: '#007bff',
      textColor: '#ffffff',
      borderStyle: '2px solid #000',
      width: '150px',
      height: '50px',
    },
    // Diğer elemanlar...

    { type: 'checkbox', label: 'Checkbox' },
    { type: 'date', label: 'Date Picker' },
    { type: 'dropdown', label: 'Dropdown' },
    { type: 'image', label: 'Image' },
    { type: 'input', label: 'Input' },
    { type: 'radio-button', label: 'Radio Button' },
    { type: 'text-area', label: 'Text Area' },
  ];

  constructor(private dragDropService: DragDropService) {}

  ngOnInit() {
    this.connectedDropList = this.dragDropService.getLayoutDropList();
  }
}
