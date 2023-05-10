import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { timer } from 'rxjs';
import { TimerComponent } from './timer/timer.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';


@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot([
    {path: '', component: ContentComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'tabuada', component: TabuadaComponent},
  ])],
  
  declarations: [MenuComponent, RootComponent, ContentComponent, FooterComponent,TabuadaComponent,TimerComponent],
  
  bootstrap: [RootComponent],
  providers: [TimerService]
})
export class AppModule {}
