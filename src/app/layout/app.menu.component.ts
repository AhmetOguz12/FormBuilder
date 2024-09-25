import { CdkDropList } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  styleUrls: ['./app.menu.component.css'],
})
export class AppMenuComponent implements OnInit {
  @Input() connectedDropList!: CdkDropList;

  availableElements = [
    {
      type: 'button',
      label: 'Submit',
      icon: 'pi pi-check', // PrimeNG icon for buttons
      buttonColor: '#007bff',
      textColor: '#ffffff',
      borderStyle: '2px solid #000',
      width: '150px',
      height: '50px',
    },
    {
      type: 'checkbox',
      label: 'Checkbox',
      icon: 'pi pi-check-square', // PrimeNG icon for checkboxes
    },
    {
      type: 'date',
      label: 'Date Picker',
      icon: 'pi pi-calendar', // PrimeNG icon for date pickers
    },
    {
      type: 'dropdown',
      label: 'Dropdown',
      icon: 'pi pi-list', // PrimeNG icon for dropdowns
      options: ['Option 1', 'Option 2', 'Option 3'], // Dropdown-specific attributes
    },
    {
      type: 'radio-button',
      label: 'Radio Button',
      icon: 'pi pi-circle-on', // PrimeNG icon for radio buttons
      options: ['Option 1', 'Option 2'], // Radio-button-specific attributes
    },
    {
      type: 'image',
      label: 'Image',
      icon: 'pi pi-image', // PrimeNG icon for image
      imageUrl: 'https://via.placeholder.com/150', // Image-specific attribute
    },
    {
      type: 'input',
      label: 'Input',
      icon: 'pi pi-pencil', // PrimeNG icon for input fields
    },
    {
      type: 'text-area',
      label: 'Text Area',
      icon: 'pi pi-align-left', // PrimeNG icon for text areas
    },
  ];

  constructor(private dragDropService: DragDropService) {}

  ngOnInit() {
    this.connectedDropList = this.dragDropService.getLayoutDropList();
  }

  // Example method to map dropdown options (for dynamic dropdowns in future)
  getDropdownOptions(options: string[]) {
    return options.map((option) => ({ label: option, value: option }));
  }
}
