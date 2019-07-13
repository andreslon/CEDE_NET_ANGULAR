import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { welcomePipe } from './pipes/welcome-pipe';
import { RankingColorPipe } from './pipes/rankingcolor-pipe';

@NgModule({
  declarations: [welcomePipe, RankingColorPipe],
  imports: [
    CommonModule
  ],
  exports: [welcomePipe, RankingColorPipe]
})
export class SharedModule { }
