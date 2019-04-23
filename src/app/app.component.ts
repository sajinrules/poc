import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="app-router-outlet">
      <router-outlet></router-outlet>
    </div> 
    <app-footer></app-footer>
  `,
  styles: [
    '.app-router-outlet { min-height: calc(100vh - 112px); }'
  ]
})
export class AppComponent {
  title = 'poc';
}
