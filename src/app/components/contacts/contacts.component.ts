import { Component, OnInit } from '@angular/core';
import {person} from "../../../data";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  person: any = person;

  constructor() { }

  ngOnInit(): void {
  }

}
