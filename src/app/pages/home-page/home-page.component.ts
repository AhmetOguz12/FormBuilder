import {
  Component,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ItemLayoutComponent } from '../item-layout/item-layout.component';
import { CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild(ItemLayoutComponent) itemLayoutComponent!: ItemLayoutComponent;
  layoutDropList!: CdkDropList; // Holds the drop list once initialized

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Initialize layoutDropList after view initialization
    if (this.itemLayoutComponent && this.itemLayoutComponent.dropList) {
      this.layoutDropList = this.itemLayoutComponent.dropList;

      // Manually trigger change detection to avoid ExpressionChangedAfterItHasBeenCheckedError
      this.cdr.detectChanges();
    }
  }
}
