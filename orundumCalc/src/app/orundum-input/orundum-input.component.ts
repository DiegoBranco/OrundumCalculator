import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-orundum-input',
  templateUrl: './orundum-input.component.html',
  styleUrls: ['./orundum-input.component.css']
})
export class OrundumInputComponent {
  pulls:number = 0; // orundum/600
  tickets:number =0; // single AND 10-pull
  orundum:number = 0; // op/180; total  
  originiumPrimes:number = 0; // total
  usePrimes:boolean = true; //user might not want to use them
  reservedPrimes:number = 0; //user might reserve some for costumes or refills. maybe even decor! 
  annihilationOrundum:number = 1800; //we assume user has max weekly, but they can change it if they are new
  currentOrundum:number = 0; //current = what user has right now
  currentOP:number = 0;
  monthlyCard:boolean = false; // not f2p so dont assume
  greenCertsT1:boolean = true; // these 2 are expected
  greenCertsT2:boolean = true;
}
