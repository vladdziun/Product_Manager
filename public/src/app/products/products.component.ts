import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  id: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._httpService.getAll().subscribe(data => {
      console.log("Got all", data);
      this.products = data;
    })
  }
  delete(id) {
    this._httpService.deleteOne(id).subscribe(data => {
      console.log("deleteing author", this.id)
      this.getAll();
    })
  }

  goProducts() {
    this._router.navigate(['/products']);
  }

}
