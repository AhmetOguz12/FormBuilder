import { Component, ViewChild } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { Observable } from 'rxjs';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.css'],
})
export class ItemLayoutComponent {
  @ViewChild(CdkDropList) dropList!: CdkDropList;
  formElements$: Observable<any[]>;

  constructor(private formService: FormService) {
    this.formElements$ = this.formService.elements$;
  }

  // Handle the drop event for both adding and reordering
  drop(event: CdkDragDrop<any[]> | any) {
    const previousContainerData = event.previousContainer.data || [];
    const containerData = event.container.data || [];

    if (event.previousContainer === event.container) {
      // Reorder items within the same container
      moveItemInArray(containerData, event.previousIndex, event.currentIndex);
      this.formService.updateElementsAfterReordering(containerData);
    } else {
      // Transfer the item from one container to another
      const copiedElement = { ...event.item.data }; // Copy the element to avoid reference issues
      containerData.splice(event.currentIndex, 0, copiedElement);
      this.formService.updateElementsAfterReordering(containerData);
    }
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
