import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface commandDataDb  {
      commandAddress : String,
      commandPhone : Number,
      commandItems : []
}

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  commandChoosen : Array<any>
  commandChoosenForm : FormGroup
  foodChoseenByName : Array<any>
  commandToDb: commandDataDb ={"commandAddress":"","commandPhone":0,"commandItems": []}

  constructor(private _menuSer: MenuService,private formBuilder : FormBuilder,private _route :Router) { }

  ngOnInit() {
    
   this.commandChoosen= this._menuSer.getFoodCommandedIndex()
   
   this.commandChoosenForm= this.formBuilder.group(
     {
      commandAddress : ['d',[Validators.required,Validators.maxLength(50)]],
      commandPhone : [0,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(14)]],
      commandFoodChoosen : this.formBuilder.array([])

     }
   )
   console.log("im initalized")
   this.intialCommandFood()
   
  }

  intialCommandFood(){
    if(this.commandChoosen){
    for (let index = 0; index < this.commandChoosen.length; index++) {

      this.commandFoodChoosen.push(this.formBuilder.control(this.commandChoosen[index]));
    }
    // make update auto of service variable
    this.foodChoseenByName = this._menuSer.getFoodCommandedName()
  }
  }

  addQte(indexCmd){
 
    this.commandFoodChoosen.get([indexCmd]).setValue(this.commandFoodChoosen.get([indexCmd]).value+1)
   
    this.foodChoseenByName[indexCmd].foodQte=this.commandFoodChoosen.get([indexCmd]).value
    
  }

  removeQte(indexCmd){
    if(this.commandFoodChoosen.get([indexCmd]).value!=0){
    this.commandFoodChoosen.get([indexCmd]).setValue(this.commandFoodChoosen.get([indexCmd]).value-1)
    this.foodChoseenByName[indexCmd].foodQte=this.commandFoodChoosen.get([indexCmd]).value
    }
  }

  get commandFoodChoosen()
  {
    return this.commandChoosenForm.get('commandFoodChoosen') as FormArray
  }

  get commandAddress(){
    return this.commandChoosenForm.get('commandAddress')
  }

  get commandPhone(){
    return this.commandChoosenForm.get('commandPhone')
  }

  // the new FoodNames Table update auto . why ???
  addMoreCmd(){
    if(this.commandChoosen){
    this._menuSer.setFoodCommandedIndex(this.commandFoodChoosen.getRawValue())
    }
  }

  onSubmit(){
    const elementCommanded: any=[]
    if(this.foodChoseenByName){
    for (let index = 0; index < this.foodChoseenByName.length; index++) {
      if(this.foodChoseenByName[index].foodQte!=0){
      elementCommanded.push(this.foodChoseenByName[index])
      }
    }
    this.commandToDb.commandAddress=this.commandAddress.value
    this.commandToDb.commandPhone= this.commandPhone.value
      this.commandToDb.commandItems= elementCommanded
     //this.commandToDb=this.commandChoosenForm.value
      console.log(this.commandToDb)
      console.log(this.foodChoseenByName)

      this._menuSer.addNewCommand(this.commandToDb)
      .subscribe(
        res => {
          console.log(res)
          console.log("success")
          this._route.navigateByUrl('/menu')
        },
        err => {
          console.log(err)
        }
      )
  }

  }

}
