import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface FormElement {
  type: string;
  label: string;
  placeholder?: string;
  value?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private elements = new BehaviorSubject<FormElement[]>([]);
  elements$ = this.elements.asObservable();

  private selectedElement = new BehaviorSubject<FormElement | null>(null);
  selectedElement$ = this.selectedElement.asObservable();

  addElement(element: FormElement) {
    const currentElements = this.elements.getValue();
    this.elements.next([...currentElements, element]);
  }

  selectElement(element: FormElement) {
    this.selectedElement.next(element);
  }

  updateElement(updatedElement: FormElement) {
    const currentElements = this.elements
      .getValue()
      .map((el) =>
        el === this.selectedElement.getValue() ? updatedElement : el
      );
    this.elements.next(currentElements);
    this.selectedElement.next(updatedElement);
  }
  // Delete element by index
  deleteElement(index: number) {
    const currentElements = this.elements.getValue();
    currentElements.splice(index, 1); // Remove item by index
    this.elements.next(currentElements);
  }
}
