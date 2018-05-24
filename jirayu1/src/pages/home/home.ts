import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TotalPage} from '../total/total';
import { BmiCalculator } from '../providers/bim-cal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  height: number;
  weight: number;
  exercise:number ;
  person: any;
  gender: any;
  age:number;
  bmr:number;
  Tdee:number;
 
  bmiMessage:any;
  bmiValue:number;

  constructor(public navCtrl: NavController,
    private calculatorProvider: BmiCalculator) {

  }

  doCalculateBmi(){
    let personObject = { weight: this.weight, height: this.height,exercise: this.exercise ,gender :this.gender,age: this.age, bmr :this.bmr }
    this.person = this.calculatorProvider.calculateBmiMetric(personObject)
    
    this.bmiValue = this.weight / (this.height / 100 * this.height / 100);

    if (this.bmiValue < 18.5) {
      this.bmiMessage = "น้ำหนักน้อย/ผอม"
    }
    if (this.bmiValue > 18.5 && this.bmiValue < 22.90) {
      this.bmiMessage = "ปกติ(สุขภาพดี)"
    }
    if (this.bmiValue > 23 && this.bmiValue < 24.90) {
      this.bmiMessage = "ท้วม/โรคอ้วนระดับ1"
    }
    if (this.bmiValue > 25 && this.bmiValue < 29.90) {
      this.bmiMessage = "อ้วน/โรคอ้วนระดับ2"
    }
    if (this.bmiValue > 30) {
      this.bmiMessage = "อ้วนมากกกก/โรคอ้วนระดับ3"
    }


    if(this.gender == 1){
      this.bmr = 66 + (13.7 * this.weight ) + (5 * this.height) -(6.8 * this.age);
      }else{
      this.bmr = 665 + (9.6 * this.weight ) + (1.8 * this.height) -(4.7 * this.age);
      }
    
      if(this.exercise == 1){
        this.Tdee = 1.2 * this.bmr;
        }
      if(this.exercise == 2){
        this.Tdee = 1.375 * this.bmr;
        }
      if(this.exercise == 3){
        this.Tdee = 1.55 * this.bmr;
        }
      if(this.exercise == 4){
        this.Tdee = 1.7 * this.bmr;
        }
      if(this.exercise == 5){
        this.Tdee = 1.9 * this.bmr;
        }
  }
    

   
  

  


  

  }

  

