import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Response {
  time: {
    update: String;
  };
  disclaimer: string;
  bpi: {
    [key in 'USD' | 'BRL']: {
      rate: string;
      description: string;
      rate_float: number;
    };
  };
}

interface PrioceUpdate {
  updated: Date;
  USD: number;
  BRL: number;
}

@Injectable()
export class BitcoinService {
  currentPrice: Response;
  lastUpdate: Date;
  lasprice: number
  UpdateList: Array<PrioceUpdate> = [];

  constructor(private http: HttpClient) {}

  update() {
   this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.lastUpdate = new Date();

          this.currentPrice = data;
          this.UpdateList.push({
            updated: this.lastUpdate,
            USD: this.currentPrice.bpi.USD.rate_float,
            BRL: this.currentPrice.bpi.BRL.rate_float,
          });          
       
      });
  }
}
