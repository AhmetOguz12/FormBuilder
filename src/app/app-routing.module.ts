import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemLayoutComponent } from './components/item-layout/item-layout.component';

const routes: Routes = [{ path: '', component: ItemLayoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
