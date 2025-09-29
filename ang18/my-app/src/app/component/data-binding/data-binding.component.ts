import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // string, number, boolean, date
  courseName: string = "Angular for data binding";
  inputType="checkbox";
  rollNo:number = 123;
  isIndian: boolean = false;
  currentDate: Date = new Date();

  constructor(){
    //constructor get called just after class object creation
    //this directs to current class
    this.courseName
  
}
}

