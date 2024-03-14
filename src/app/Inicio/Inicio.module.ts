import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioInterfazComponent } from './inicio-interfaz/inicio-interfaz.component';
import { ContentVideoComponent } from './content-video/content-video.component';
import { ContentSecondVideoComponent } from './content-second-video/content-second-video.component';
import { ContentThirdVideoComponent } from './content-third-video/content-third-video.component';
import { ContentFourthVideoComponent } from './content-fourth-video/content-fourth-video.component';
import { ContentFifthVideoComponent } from './content-fifth-video/content-fifth-video.component';
import { ContentSixthVideoComponent } from './content-sixth-video/content-sixth-video.component';
import { FilterStressComponent } from './filter-stress/filter-stress.component';
import { FilterBreathingComponent } from './filter-breathing/filter-breathing.component';
import { FilterMentalComponent } from './filter-mental/filter-mental.component';
import { FilterSleepComponent } from './filter-sleep/filter-sleep.component';
import { FilterGrowthComponent } from './filter-growth/filter-growth.component';
@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [InicioInterfazComponent, ContentVideoComponent, ContentSecondVideoComponent, ContentThirdVideoComponent,
  ContentFourthVideoComponent, ContentFifthVideoComponent, ContentSixthVideoComponent,FilterStressComponent,
  FilterBreathingComponent, FilterMentalComponent, FilterSleepComponent, FilterGrowthComponent],
  declarations: [InicioInterfazComponent, ContentVideoComponent, ContentSecondVideoComponent, ContentThirdVideoComponent,
  ContentFourthVideoComponent, ContentFifthVideoComponent, ContentSixthVideoComponent,FilterStressComponent,
  FilterBreathingComponent, FilterMentalComponent, FilterSleepComponent, FilterGrowthComponent]
})
export class InicioModule { }
