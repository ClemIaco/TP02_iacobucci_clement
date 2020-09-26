import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  client = new Client();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {  
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');  
    console.table(this.client);  
  }

}
