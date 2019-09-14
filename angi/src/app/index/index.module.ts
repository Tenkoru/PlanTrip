import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IndexComponent, HeaderComponent]
})
export class IndexModule { }
