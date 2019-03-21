import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updatedProduct: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.updatedProduct = { title: "", price: "", url: "" }
    this.getOneProduct(); 

  }
  getOneProduct(){
    this._httpService.getOne(this._route.snapshot.paramMap.get('id'))
    .subscribe(data =>{
      this.updatedProduct = { title: data['title'], price: data['price'],
      url: data['url'] }

    })
  }
  updateProduct() {
   let id = this._route.snapshot.paramMap.get('id');
    this._httpService.updateOne(id, this.updatedProduct).subscribe(data => {
      console.log("updatingproduct", data);
    })
    this.updatedProduct = { title: "", price: "", url: "" }
  }
}
