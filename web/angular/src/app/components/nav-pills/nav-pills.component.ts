import { Component, OnInit, Input } from '@angular/core';

interface IPill {
  link: string;
  text: string;
}

@Component({
  selector: 'app-nav-pills',
  templateUrl: './nav-pills.component.html',
  styleUrls: ['./nav-pills.component.scss']
})
export class NavPillsComponent implements OnInit {
  @Input() items: Array<IPill> = [];

  constructor() {}

  ngOnInit(): void {}
}
