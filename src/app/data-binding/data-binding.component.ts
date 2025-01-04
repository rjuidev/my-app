import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  name:string="Mr.Sai Reddy";
  age:number=27;
  email:string="saireddy@gmail.com"

// [property binding]   

  isIndian:boolean=false;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }


  user:any={
    name:"Sai reddy",
    age:28,
    email:"saireddy143@gmail.com"

  }
     
     submit(){
      alert("Clicked button")
     }
     typing(){
          alert("typing.......")
     }
}
