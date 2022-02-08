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
    else if(this.numero < 0 || this.numero > 1000){
      this.resultado = undefined;
      this.infoToast();
    }
    else{
      console.log(this.numero, 'else');
      this.conversion(this.numero);
    }
  }

  conversion(num: number){
    if(num===0){
      this.resultado = 'Cero';
    }
    else if(num===1){
      this.resultado = 'Uno';
    }
    else{
      this.resultado = 'Otro menos 0 y 1';
    }
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
  async infoToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debe Ingresar Un Número Entre 0 y 1000.',
      duration: 2000,
      color: 'warning',
      icon: 'information-circle',
    });
    toast.present();
  }

}
