import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  

  
  constructor(public bitcoinService: BitcoinService){ }

  ngOnInit() {
    this.update(); 
    setInterval(() =>{
      let priceUSD = this.getCurrentPriceUSD();
      let priceBRL = this.getCurrentPriceBRL();
      let update = this.getUpdate();
  
      console.log(update);
      
      let tr = document.getElementById('table') as HTMLElement;
    
      tr.innerHTML = `
      <td>${update} | </td>
        <td>$${priceUSD.rate_float} | </td>
        <td>$${priceBRL.rate_float}</td>
      `;
    }, 1000)
  }

  getCurrentPriceUSD(){
    return this.bitcoinService.currentPrice.bpi.USD;
  }
  getCurrentPriceBRL(){
    return this.bitcoinService.currentPrice.bpi.BRL;
  }
  getUpdate(){
    return this.bitcoinService.lastUpdate;

  }

  public update() {
    this.bitcoinService.update();
  }
  
  
  
}

