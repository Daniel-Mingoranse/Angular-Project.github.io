import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  tab: number[] = [];
  value: number = 0;
  result: number[] = [];

  constructor() {}

  ngOnInit() {
    var valor = document.getElementById('valor') as HTMLInputElement;
    
     
    setInterval(() => {
      if(valor.value === ''){
        this.value = 0;
      } else{
        this.value = parseInt(valor.value);
      }
      
      this.result.splice(0, this.result.length); // remove todos os elementos do array
      
      for (let i = 0; i <= 10; i++) {
        var resultado = this.value * i;
        this.result.push(resultado);
        this.tab.push(i);
      }
    }, 1000);
  }
}
