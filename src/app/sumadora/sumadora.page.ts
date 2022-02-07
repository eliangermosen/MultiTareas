import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  pantalla: string;
  valorUno: number;
  valorDos: number;
  valorFinal: number;
  uno: number;
  dos: number;
  tres: number;
  cuatro: number;
  cinco: number;
  seis: number;
  siete: number;
  ocho: number;
  nueve: number;

  valor = '0';
  anteriorValor = '0';
  ultimoOperador = '+';
  teclas=[0,1,2,3,4,5,6,7,8,9,'+','-','X','/','AC','=','.'];

  constructor() {
    this.pantalla='0';
    this.uno = 1;
    this.dos = 2;
    this.tres = 3;
    this.cuatro = 4;
    this.cinco = 5;
    this.seis = 6;
    this.siete = 7;
    this.ocho = 8;
    this.nueve = 9;
   }

  ngOnInit() {
    // this.pantalla='0';
  }

  // aqui
  presionarTecla(tecla){
    console.log(tecla);
    // if(isNaN(num)){
    //   console.log('es un numero');
    // }
    // else{
    //   console.log('NO es un numero');
    // }
    if(typeof tecla == 'number'){
      console.log('es un numero');
      if(this.pantalla==='0'){
        this.pantalla=''+tecla;
      }
      else{
        this.pantalla+=tecla;
      }
    }
    else if(tecla === '='){
      if(this.ultimoOperador==='+'){
        console.log('suma');
        // console.log('viendo', this.pantalla, this.anteriorValor);
        this.pantalla= ''+ (parseInt(this.pantalla) + parseInt(this.anteriorValor));
      }
      if(this.ultimoOperador==='-'){
        console.log('resta');
        // console.log('viendo', this.pantalla, this.anteriorValor);
        this.pantalla= ''+ (parseInt(this.anteriorValor) - parseInt(this.pantalla));
      }
      if(this.ultimoOperador==='X'){
        console.log('multiplica');
        // console.log('viendo', this.pantalla, this.anteriorValor);
        this.pantalla= ''+ (parseInt(this.pantalla) * parseInt(this.anteriorValor));
      }
      if(this.ultimoOperador==='/'){
        console.log('divide');
        // console.log('viendo', this.pantalla, this.anteriorValor);
        this.pantalla= ''+ (parseInt(this.anteriorValor) / parseInt(this.pantalla));
      }
    }
    // else if(tecla === '+'){

    // }
    // else if(tecla === '-'){

    // }
    // else if(tecla === 'X'){

    // }
    // else if(tecla === '/'){

    // }
    else{
      // console.log('NO');
      this.anteriorValor = this.pantalla;
      this.pantalla='0';
      this.ultimoOperador = tecla;
    }

  }
  // hasta aqui

  agregar(s: string){
    if(this.pantalla==='0'){
      this.pantalla=s;
    }
    else{
      this.pantalla+=s;
    }
  }
  del(){
    this.pantalla='0';
  }
  suma(n: string){
    console.log('suma');
    console.log(n);
    // this.valorUno = n;
    // this.valorDos = n;
    this.valorUno = parseFloat(n);
    console.log(this.valorUno+10);
    this.pantalla='0';
  }
  resta(n: number){
    console.log('resta');
  }
  multiplicacion(n: number){
    console.log('multiplicacion');
  }
  division(n: number){
    console.log('division');
  }
  igual(n: number){
    console.log('igual');
  }

}
