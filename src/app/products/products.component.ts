import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {

  }
  pageTitle = 'Product List';
  errorMessage = '';
  imageWidth = 30;
  showImage = false;
  imgMargin = 2;
  _filterby = '';
  filterProduct: IProduct[] = [];

  get filterby(): string {
    return this._filterby;
  }
  set filterby(value: string) {
    this._filterby = value;
    this.filterProduct = this._filterby
      ? this.products.filter(product => product.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) !== -1)
      : this.products;

  }
  products: IProduct[] = [];
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: any) => {
        this.products = products.products;
        this.filterProduct = this.products;
      },
      error => this.errorMessage = <any>error
    );

  }
  onRatingClicked(message) {
    this.pageTitle = 'Product List : ' + message;
  }
  onShowImage() {
    this.showImage = !this.showImage;
  }

}
