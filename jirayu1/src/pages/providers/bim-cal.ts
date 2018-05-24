import { Injectable } from '@angular/core';

@Injectable()
export class BmiCalculator {

  constructor() {
  }

  
  calculateBmiMetric(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight > 0 && height > 0) {
      let finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue = parseFloat(finalBmi.toFixed(2));
      this.setBMIMessage(obj);
      return obj
    }
  };

  private

  setBMIMessage(obj) {
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "น้ำหนักน้อย/ผอม"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 22.90) {
      obj.bmiMessage = "ปกติ(สุขภาพดี)"
    }
    if (obj.bmiValue > 23 && obj.bmiValue < 24.90) {
      obj.bmiMessage = "ท้วม/โรคอ้วนระดับ1"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 29.90) {
      obj.bmiMessage = "อ้วน/โรคอ้วนระดับ2"
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "อ้วนมากกกก/โรคอ้วนระดับ3"
    }
  }
}
