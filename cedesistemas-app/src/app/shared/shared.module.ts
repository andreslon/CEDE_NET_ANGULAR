import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { welcomePipe } from './pipes/welcome-pipe';
import { RankingColorPipe } from './pipes/rankingcolor-pipe';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [welcomePipe, RankingColorPipe, DialogComponent],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [welcomePipe, RankingColorPipe]
})
export class SharedModule { }
