import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
