import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../plantas.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {
  plantas: Array<Planta> = [];
  sumaTipos: Array<number> = [];
  constructor(private plantasService: PlantasService) { }
  getPlantas (): void{
    this.plantasService.getPlantas().subscribe((plantas)=>{
      this.plantas = plantas;
    })
  }

  sumTipos(): void{

    this.plantasService.getPlantas().subscribe((plantas)=>{
      const interior  = plantas.filter((val)=> val.tipo === 'Interior').length
      const exterior  = plantas.filter((val)=> val.tipo === 'Exterior').length
      this.sumaTipos = [interior, exterior]
    })

  }
  ngOnInit() {
    this.getPlantas();
    this.sumTipos();
  }

}
