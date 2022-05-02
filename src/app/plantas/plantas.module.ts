import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { ListaPlantasComponent} from './lista-plantas/lista-plantas.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent, ListaPlantasComponent],
  exports: [PlantasComponent, ListaPlantasComponent]
})
export class PlantasModule { }
