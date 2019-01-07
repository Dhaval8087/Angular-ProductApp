import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = "Product Details"
  constructor(private route: ActivatedRoute,private router:Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
  product:string="test";
  ngOnInit() {
    
  }
  onBack(){
    this.router.navigate(['/products']);
  }
}
