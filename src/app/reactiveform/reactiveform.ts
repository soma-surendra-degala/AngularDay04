import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css'
})
export class Reactiveform implements OnInit{

  myForm!: FormGroup;

  ngOnInit(): void {

    this.myForm=new FormGroup(
      {
        uname:new FormControl("Suri",Validators.required),
        emailAddress:new FormControl(null,[Validators.required,Validators.email]),
        readTerms:new FormControl(false),
      }
    );
      
  }

  onSubmit(){

    this.myForm.reset();

  }

  accept(){
    // this.myForm.setValue({
    //   uname:'Surendra',
    //   email:null,
    //   readTerms:true
    // })

    this.myForm.patchValue({
      readTerms:true
    })
  }

}
