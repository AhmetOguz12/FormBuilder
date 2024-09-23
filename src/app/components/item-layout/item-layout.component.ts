import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormService } from 'src/app/form.service';
@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.css'],
})
export class ItemLayoutComponent {
  formElements$ = this.formService.elements$;

  constructor(private formService: FormService) {}

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
  editElement(element: any) {
    this.formService.selectElement(element);
  }
  deleteElement(index: number) {
    this.formService.deleteElement(index);
  }
}
