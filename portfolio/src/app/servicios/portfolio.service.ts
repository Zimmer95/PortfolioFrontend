import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  obtenerDatos() {
    console.log("el servicio portfolio esta corriendo correctamente");
   }
}
