import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { IsoToShortPipe } from './pipes/iso-to-short.pipe';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { IonicModule } from '@ionic/angular';
registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [EnumToArrayPipe, IsoToShortPipe],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KanbanModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KanbanModule,

    IsoToShortPipe

  ]
})
export class SharedModule { }
