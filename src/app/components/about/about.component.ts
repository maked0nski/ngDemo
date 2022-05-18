import { Component, OnInit } from '@angular/core';
import {person} from "../../../data";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  person: any = person;

  constructor() { }

  ngOnInit(): void {
  }

}
