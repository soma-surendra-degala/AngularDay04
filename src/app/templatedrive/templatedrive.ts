import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatedrive',
  imports: [FormsModule,CommonModule],
  templateUrl: './templatedrive.html',
  styleUrl: './templatedrive.css'
})
export class Templatedrive {
    @ViewChild ('myform',{static:true}) myform :any



  onSubmmiting(myform:any){
    this.myform.reset();
  }
}
