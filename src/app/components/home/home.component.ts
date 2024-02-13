import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  images: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }

    this.images = [
      'assets/logos-empresas/aje.png',
      'assets/logos-empresas/comesa.png',
      'assets/logos-empresas/fibrafil.png',
      'assets/logos-empresas/funespa.png',
      'assets/logos-empresas/geohidraulica.png',
      'assets/logos-empresas/masterdrilling.png',
      'assets/logos-empresas/tramarsa.png',
      'assets/logos-empresas/volcan.png',
      'assets/logos-empresas/vulco.png',
    ];
  }

  activeImage: string | null = null;
  isHovered = false;

  setActiveImage(image: string | null): void {
    this.activeImage = image;
  }

  setHoverStatus(status: boolean): void {
    this.isHovered = status;
    if (!status) {
      this.activeImage = null;
    }
  }
}
