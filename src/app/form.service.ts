import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private elementsSubject = new BehaviorSubject<any[]>([]);
  elements$ = this.elementsSubject.asObservable();

  private selectedElementSubject = new BehaviorSubject<any>(null);
  selectedElement$ = this.selectedElementSubject.asObservable();

  // Add a new element to the form layout
  addElement(element: any) {
    const currentElements = this.elementsSubject.getValue();
    const newElement = { ...element };
    currentElements.push(newElement);
    this.elementsSubject.next(currentElements);
  }

  // Select an element for editing
  selectElement(element: any) {
    this.selectedElementSubject.next(element);
  }

  // Update the selected element
  updateElement() {
    const currentElements = this.elementsSubject.getValue();
    const selectedElement = this.selectedElementSubject.getValue();
    const index = currentElements.findIndex((el) => el === selectedElement);

    if (index !== -1) {
      currentElements[index] = { ...selectedElement }; // Update the element
      this.elementsSubject.next(currentElements); // Notify observers of changes
    }
  }

  // New method: Update elements after reordering
  updateElementsAfterReordering(elements: any[]) {
    this.elementsSubject.next(elements); // Directly update the elements with new order
  }

  // Get access to the BehaviorSubject for external use
  getElementsSubject() {
    return this.elementsSubject;
  }
}
