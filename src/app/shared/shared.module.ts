import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
