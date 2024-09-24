import { Component, ViewChild } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { Observable } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { DragDropService } from 'src/app/services/drag-drop.service';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.css'],
})
export class ItemLayoutComponent {
  formElements$: Observable<any[]>;
  @ViewChild(CdkDropList) dropList!: CdkDropList;

  constructor(
    private dragDropService: DragDropService,
    private formService: FormService
  ) {
    // Initialize formElements$ with the observable from FormService
    this.formElements$ = this.formService.elements$;
  }

  ngAfterViewInit() {
    // Register the layout drop list in the service
    this.dragDropService.setLayoutDropList(this.dropList);
  }
  drop(event: CdkDragDrop<any[]> | any) {
    const previousContainerData = event.previousContainer.data || [];
    const containerData = event.container.data || [];

    if (event.previousContainer === event.container) {
      // Reorder items within the same container
      moveItemInArray(containerData, event.previousIndex, event.currentIndex);
    } else {
      // Transfer the item from the menu to the layout
      const copiedElement = { ...event.item.data }; // Deep copy to avoid reference issues
      containerData.splice(event.currentIndex, 0, copiedElement);
    }

    // Update the form elements in the FormService after drop
    this.formService.updateElementsAfterReordering(containerData);
  }

  // Select an item for editing
  editElement(element: any) {
    this.formService.selectElement(element); // Select the clicked element
  }

  // Confirm and remove the item
  confirmRemoveItem(element: any, event: Event) {
    event.stopPropagation(); // Prevent triggering other click events
    const confirmed = confirm(
      `Are you sure you want to remove this item: ${element.label}?`
    );

    if (confirmed) {
      this.removeItem(element);
    }
  }

  // Remove the item from the layout
  removeItem(element: any) {
    const currentElements = this.formService.getElementsSubject().getValue();
    const updatedElements = currentElements.filter((el) => el !== element);
    this.formService.updateElementsAfterReordering(updatedElements);
  }
}
