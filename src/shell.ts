import {Router, RouterConfiguration} from 'aurelia-router';
import 'arrive';
import 'bootstrap';
import 'bootstrap-material-design';

export class Shell {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'home', nav: true, title: 'Home' },
    ]);
    this.router = router;
  }

  attached(){
    if($.material){
      $.material.init();
    }else{
      console.warn('jquery.ma')
    }
      
  }
}
