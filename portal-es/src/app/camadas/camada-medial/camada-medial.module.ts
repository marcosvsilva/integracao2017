import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamadaMedialComponent } from './camada-medial/camada-medial.component';
import { CamadaMedialRoutingModule } from './camada-medial-routing.module';
import { CamadaMedialService } from './shared/camada-medial.service';

@NgModule({
  declarations: [CamadaMedialComponent],  
  imports: [
    CommonModule,
    CamadaMedialRoutingModule
  ],
  exports: [CamadaMedialComponent],
  providers: [CamadaMedialService]
})
export class CamadaMedialModule { }
