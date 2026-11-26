import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonInput, IonButton, IonIcon, IonList, IonItem, IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  storefrontOutline, peopleOutline, cashOutline, add, remove,
  logoAndroid, logoApple, globeOutline,
} from 'ionicons/icons';

interface Plataforma {
  nombre: string;
  icono: string;
  descripcion: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonInput, IonButton, IonIcon, IonList, IonItem, IonLabel,
  ],
})
export class InicioPage {
  nombre = '';   // lo que escribe el usuario ([(ngModel)] lo enlaza al input)
  clientes = 0;  // contador que cambia con los botones
  ventas = 0;    // RETO 1: ventas del día en soles (nunca baja de 0)

  // Lista que el HTML repite con @for
  plataformas: Plataforma[] = [
    { nombre: 'Android', icono: 'logo-android', descripcion: 'APK con Capacitor + Android Studio' },
    { nombre: 'iOS', icono: 'logo-apple', descripcion: 'Proyecto Xcode con Capacitor' },
    { nombre: 'Web (PWA)', icono: 'globe-outline', descripcion: 'Se abre en el navegador' },
  ];

  constructor() {
    // Registra los íconos que usa esta pantalla
    addIcons({
      storefrontOutline, peopleOutline, cashOutline, add, remove,
      logoAndroid, logoApple, globeOutline,
    });
  }

  // (click)="sumar()"
  sumar(): void {
    this.clientes++;
  }

  // nunca negativo
  restar(): void {
    if (this.clientes > 0) this.clientes--;
  }

  // RETO 1: +S/ 1
  sumarVenta(): void {
    this.ventas++;
  }

  // RETO 1: −S/ 1, nunca baja de 0
  restarVenta(): void {
    if (this.ventas > 0) this.ventas--;
  }
}
