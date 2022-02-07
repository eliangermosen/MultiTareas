import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  numero: number;
  resultado: string;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  convertir(num: number){
    if(this.numero===null || this.numero===undefined){
      this.presentToast();
    }
    else{
      console.log(this.numero, 'else');
      this.conversion(this.numero);
      // this.numero = undefined;
    }
    // console.log('numero');
    // const inputEnt = document.getElementById('numeroP')[0].value;
    // document.getElementById('result').innerHTML = inputEnt;
  }

  conversion(num: number){
    if(num===1){
      this.resultado = 'Uno';
    }
    else{
      console.log('numero fuera de rango');
    }
    // console.log(this.numero, 'conversion');
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debe Ingresar Un Número Para Convertir.',
      duration: 2000,
      color: 'danger',
      icon: 'warning',
    });
    toast.present();
  }

}
