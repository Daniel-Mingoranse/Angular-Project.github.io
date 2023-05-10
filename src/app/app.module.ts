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
import { BitcoinService } from './bitcoin.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BitcoinComponent } from './bitcoin/bitcoin.component';


@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule,RouterModule.forRoot([
    {path: '', component: ContentComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'tabuada', component: TabuadaComponent},
    {path: 'bitcoin', component: BitcoinComponent},
  ])],
  
  declarations: [MenuComponent, RootComponent, ContentComponent, FooterComponent,TabuadaComponent,TimerComponent, BitcoinComponent],
  
  bootstrap: [RootComponent],
  providers: [TimerService, BitcoinService]
})
export class AppModule {}
