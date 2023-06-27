import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Componente1 } from './Componente1/Componente1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Componente1],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [Componente1],
})
export class Modulo1 {}
