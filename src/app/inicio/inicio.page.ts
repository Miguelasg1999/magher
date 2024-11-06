import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
//import Swiper from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  /*@ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;*/

  map: google.maps.Map | undefined;  // Definimos la variable del mapa
  lat: number = -38.76368335586436;  // Latitud de ejemplo (Nueva York)
  lng: number = -72.60441911789803; // Longitud de ejemplo (Nueva York)


  images = [
    'https://images.crowdspring.com/blog/wp-content/uploads/2023/05/16174534/bakery-hero.png',
    'https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY=',
    'https://cdn.vox-cdn.com/thumbor/asoX4fSv_-t7PapIPVK1dsrPM7Y=/0x0:3024x4032/1200x900/filters:focal(1691x1908:2173x2390)/cdn.vox-cdn.com/uploads/chorus_image/image/63894484/IMG_9124.63.jpeg']

  constructor(private aService: AuthService, private router: Router) { }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/inicio"]);
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const loader = new Loader({
      apiKey: 'AIzaSyDbB8BDZ76ZD3EB1EZUtBM6Y00Nih0KYqY',  // Reemplaza con tu clave de API de Google Maps
      version: 'weekly',  // La versión de la API
    });

    // Cargar la API y luego inicializar el mapa
    loader.load().then(() => {
      // Inicializamos el mapa
      this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: this.lat, lng: this.lng },  // Configuramos la latitud y longitud
        zoom: 12,  // Nivel de zoom
      });

      // Agregar un marcador en el mapa
      const marker = new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },  // Coordenadas del marcador
        map: this.map,  // Asociamos el marcador con el mapa
        title: "Ubicación de ejemplo",  // Título que aparece al hacer clic en el marcador
      });
    });
  }

  /*swiperSlideChanged(e: any) {
    console.log('changed: ', e)
  }*/

}
