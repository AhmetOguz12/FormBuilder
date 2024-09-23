import { Component, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.css'],
})
export class ItemLayoutComponent {
  formElements$: Observable<any[]>;

  @ViewChild(CdkDropList) dropList!: CdkDropList;

  constructor(private formService: FormService) {
    this.formElements$ = this.formService.elements$;
  }

  // Handle the drop event
  drop(event: CdkDragDrop<any[]> | any) {
    const previousContainerData = event.previousContainer.data || [];
    const containerData = event.container.data || [];

    if (event.previousContainer === event.container) {
      // If dropped in the same container, reorder the items
      moveItemInArray(containerData, event.previousIndex, event.currentIndex);
      this.formService.updateElementsAfterReordering(containerData);
    } else {
      // Manually copy the dragged element without mutating the availableElements array
      const copiedElement = { ...event.item.data }; // Deep copy the dragged item
      containerData.splice(event.currentIndex, 0, copiedElement); // Add the copied element to the new list

      this.formService.updateElementsAfterReordering(containerData);
    }
  }

  // Trigger editing when an item is clicked
  editElement(element: any) {
    this.formService.selectElement(element);
  }

  // Method to confirm and remove the item
  confirmRemoveItem(element: any, event: Event) {
    event.stopPropagation(); // Prevent triggering other click events
    const confirmed = confirm(
      `Are you sure you want to remove this item: ${element.label}?`
    );

    if (confirmed) {
      this.removeItem(element);
    }
  }

  // Remove item from the layout
  removeItem(element: any) {
    const currentElements = this.formService.getElementsSubject().getValue();
    const updatedElements = currentElements.filter((el) => el !== element);
    this.formService.updateElementsAfterReordering(updatedElements);
  }
}
