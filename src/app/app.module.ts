import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { ItemLayoutComponent } from './pages/item-layout/item-layout.component';
import { EditItemsComponent } from './pages/edit-items/edit-items.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ButtonComponent } from './components/button/button.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ImageComponent } from './components/image/image.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ItemLayoutComponent,
    EditItemsComponent,
    HomePageComponent,
    RadioButtonComponent,
    ButtonComponent,
    TextAreaComponent,
    CheckboxComponent,
    DropdownComponent,
    ImageComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    AppLayoutModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    InputTextareaModule,
    ImageModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
