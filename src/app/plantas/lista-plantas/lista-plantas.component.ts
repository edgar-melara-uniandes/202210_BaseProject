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
  constructor(private plantasService: PlantasService) { }
  getPlantas (): void{
    this.plantasService.getPlantas().subscribe((plantas)=>{
      this.plantas = plantas;
    })
  }
  ngOnInit() {
    this.getPlantas();
  }

}
