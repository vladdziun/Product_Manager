import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { callbackify } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  authors: any;

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
 

}}
