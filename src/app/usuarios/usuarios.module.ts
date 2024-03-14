import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuarioRegisterComponent } from './usuario-register/usuario-register.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [UsuarioLoginComponent, UsuarioRegisterComponent],
  declarations: [UsuarioLoginComponent, UsuarioRegisterComponent]
})
export class UsuariosModule { }
