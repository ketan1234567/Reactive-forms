import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  ngOnInit(): void {
   
  }
  productdata:any;
  displayColums:string[]=["code","name","price","remarks","actions"];


}
