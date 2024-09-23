import { Component, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  transferArrayItem,
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

  // Expose the CdkDropList directive for use in other components
  @ViewChild(CdkDropList) dropList!: CdkDropList;

  constructor(private formService: FormService) {
    this.formElements$ = this.formService.elements$;
  }

  // Handle the drop event
  drop(event: CdkDragDrop<any[]> | any) {
    const previousContainerData = event.previousContainer.data || [];
    const containerData = event.container.data || [];

    if (event.previousContainer !== event.container) {
      const copiedElement = { ...previousContainerData[event.previousIndex] };
      transferArrayItem(
        previousContainerData,
        containerData,
        event.previousIndex,
        event.currentIndex
      );
      this.formService.addElement(copiedElement);
    }
  }

  // Trigger editing when an item is clicked
  editElement(element: any) {
    this.formService.selectElement(element); // Notify EditItemComponent
  }
}
