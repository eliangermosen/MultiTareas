import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
    { title: 'Traductor ', url: '/traductor', icon: 'language' },
    { title: 'Multiplicadora', url: '/multiplicador', icon: 'calculator' },
    { title: 'Video', url: '/video', icon: 'videocam' },
  ];
  constructor() {}
}
