import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor(private builder:FormBuilder){

  }
  ngOnInit(): void {
   
  }
  productform=this.builder.group({
    code:this.builder.control('',Validators.required),
    name:this.builder.control('',Validators.required),
    price:this.builder.control('',Validators.required),
    remark:this.builder.control(''),
    category:this.builder.control(''),
    variants:this.builder.control([])



  })

}
