import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../servicios/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicaciones: any[] = [];

  constructor(private publicacionesService: PublicacionesService) { }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones(): void {
    this.publicacionesService.obtenerPublicaciones()
      .subscribe(data => {
        this.publicaciones = data;
      });
  }

}
