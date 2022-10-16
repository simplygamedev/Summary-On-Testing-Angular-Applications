import { Component } from '@angular/core';

@Component({
    template: `
        <i [appFavoriteIcon]="true"></i>
        <i [appFavoriteIcon]="false"></i>
        <i [appFavoriteIcon]="true" [color]="'blue'"></i>
        <i [appFavoriteIcon]="true" [color]="'cat'"></i>
      `
  })
export class TestComponent { }