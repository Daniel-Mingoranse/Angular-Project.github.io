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
   
    setInterval(() =>{
      this.update(); 
      let priceUSD = this.getCurrentPriceUSD();
      let priceBRL = this.getCurrentPriceBRL();
      let time = this.gettime();
      
      let tr = document.getElementById('table') as HTMLElement;
    
      tr.innerHTML = `
        <td>$${priceUSD.rate_float} | </td>
        <td>$${priceBRL.rate_float}</td>
      `;
    }, 5000)
  }

  getCurrentPriceUSD(){
    return this.bitcoinService.currentPrice.bpi.USD;
  }
  getCurrentPriceBRL(){
    return this.bitcoinService.currentPrice.bpi.BRL;
  }
  gettime(){
    return this.bitcoinService.UpdateList
  }


  public update() {
    this.bitcoinService.update();
  }
  
  
  
}

