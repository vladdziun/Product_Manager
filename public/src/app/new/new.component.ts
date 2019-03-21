import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct: any;

  errors: any = {
    title: "",
    price: "",
    url: ""
  };

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newProduct = { title: "", price: "", url: "" }

    this.goNew();
  }
  addProduct() {
    this._httpService.addNew(this.newProduct).subscribe(data => {
      console.log("adding new product", data);
      if (data['errors'])
        this.errors = data['errors'];
      else
        this.goNew();
      
        console.log(this.errors);
    })
    this.newProduct = { title: "", price: "", url: "" }
  }

  goNew() {
    this._router.navigate(['/new']);
  }

}
