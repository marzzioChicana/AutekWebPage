import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from '@coreui/angular';
import { CarouselCaptionComponent } from '@coreui/angular';
import { CarouselControlComponent } from '@coreui/angular';
import { CarouselIndicatorsComponent } from '@coreui/angular';
import { CarouselInnerComponent } from '@coreui/angular';
import { CarouselItemComponent } from '@coreui/angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    NgbCarouselModule,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatCheckboxModule,
    NgbCarouselModule,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
  ],
})
export class MaterialModule { }
