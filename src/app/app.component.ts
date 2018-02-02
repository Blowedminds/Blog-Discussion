import { Component } from '@angular/core';
//import { ActivatedRoute, Params, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(
    // private route: ActivatedRoute,
    // private router: Router
  )
  {
    // this.router.events.filter( e => e instanceof NavigationEnd).subscribe( e => {
    //
    //   let article = route.root.firstChild.snapshot.params['article']
    //
    // })
   }


}
