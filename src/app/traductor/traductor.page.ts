import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  probando(){
    console.log('numero');
    const inputEnt = document.getElementById('numeroP')[0].value;
    document.getElementById('result').innerHTML = inputEnt;
  }

}
