import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {
  rfContact: FormGroup;
  name:String="";
  edit_name:String="";
  list=[];
  constructor(){}
  ngOnInit() {
  }
  btn_add(){
    console.log(this.name)
    this.list.push(this.name);
  }
  btn_remove(str){
    let i = this.list.indexOf(str);
    if (i != -1) {
      this.list.splice(i,1);
    }
  }
  btn_save(){
    
  }
 
}
