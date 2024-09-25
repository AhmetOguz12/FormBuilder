import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { FormService } from 'src/app/services/form.service';
import { DragDropService } from 'src/app/services/drag-drop.service';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.css'],
})
export class ItemLayoutComponent implements AfterViewInit {
  formElements$ = this.formService.elements$;

  @ViewChild(CdkDropList) dropList!: CdkDropList;

  constructor(
    private dragDropService: DragDropService,
    private formService: FormService
  ) {}

  ngAfterViewInit() {
    this.dragDropService.setLayoutDropList(this.dropList);
  }

  editElement(element: any) {
    this.formService.selectElement(element); // Notify the form service of the selected element
  }

  confirmRemoveItem(element: any, event: Event) {
    event.stopPropagation();
    const confirmed = confirm(
      `Are you sure you want to remove this item: ${element.label}?`
    );
    if (confirmed) {
      this.removeItem(element);
    }
  }

  removeItem(element: any) {
    const currentElements = this.formService.getElementsSubject().getValue();
    const updatedElements = currentElements.filter((el) => el !== element);
    this.formService.updateElementsAfterReordering(updatedElements);
  }

  drop(event: any) {
    this.formService.addElement(event.item.data);
  }
}
