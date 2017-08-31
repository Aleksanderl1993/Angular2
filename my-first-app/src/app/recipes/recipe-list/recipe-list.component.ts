import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test przepisu', 'przykładowe zdjęcie', 'http://4.bp.blogspot.com/-tfcfG3wgWf8/Vf8O8jSVxPI/AAAAAAAAB1A/Mmyq49SIyGc/s1600/DSC07720.JPG'),
    new Recipe('test przepisu', 'przykładowe zdjęcie', 'http://4.bp.blogspot.com/-tfcfG3wgWf8/Vf8O8jSVxPI/AAAAAAAAB1A/Mmyq49SIyGc/s1600/DSC07720.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }

}
