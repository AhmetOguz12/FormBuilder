import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  // BehaviorSubjects to track form elements and selected element
  private elementsSubject = new BehaviorSubject<any[]>([]);
  elements$ = this.elementsSubject.asObservable();

  private selectedElementSubject = new BehaviorSubject<any>(null);
  selectedElement$ = this.selectedElementSubject.asObservable();

  // Add a new element to the form layout
  addElement(element: any) {
    const currentElements = this.elementsSubject.getValue();
    const newElement = { ...element }; // Deep copy the element to avoid reference issues
    currentElements.push(newElement);
    this.elementsSubject.next(currentElements);
  }

  // Update the list of elements after reordering or modifying
  updateElementsAfterReordering(elements: any[]) {
    this.elementsSubject.next(elements); // Directly update the elements
  }

  // Select an element for editing
  selectElement(element: any) {
    this.selectedElementSubject.next(element); // Notify subscribers about the selected element
  }

  // Update the selected element with new properties (e.g., new label, value)
  updateElement(updatedElement: any) {
    const currentElements = this.elementsSubject.getValue();
    const selectedElement = this.selectedElementSubject.getValue();

    const index = currentElements.findIndex((el) => el === selectedElement);
    if (index !== -1) {
      currentElements[index] = { ...currentElements[index], ...updatedElement };
      this.elementsSubject.next(currentElements); // Notify subscribers about the updated elements
      this.selectedElementSubject.next(currentElements[index]); // Update the selected element
    }
  }

  // Remove an element from the layout
  removeElement(element: any) {
    const currentElements = this.elementsSubject.getValue();
    const updatedElements = currentElements.filter((el) => el !== element);
    this.elementsSubject.next(updatedElements); // Update the list after removal
  }

  // Get access to the elements BehaviorSubject
  getElementsSubject() {
    return this.elementsSubject;
  }
}
