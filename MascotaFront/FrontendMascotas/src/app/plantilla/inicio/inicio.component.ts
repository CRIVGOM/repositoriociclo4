import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  login(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
  }
}
