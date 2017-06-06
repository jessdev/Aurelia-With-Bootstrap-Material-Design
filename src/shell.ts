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
      { route: ['todo'], name: 'todo', moduleId: 'todo', nav: true, title: 'To Do List' }
    ]);
    this.router = router;
  }

  attached(){
    if($.material){
      $.material.init();
      console.log('material inti run');
    }else{
      console.warn('jquery.material was undefined.')
    }
      
  }
}
