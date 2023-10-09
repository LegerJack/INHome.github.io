import Route from '@ember/routing/route';

export default class GadgetsRoute extends Route {
  model() {
    return ['Телевизор', 'Холодильник', 'Робот пылесос'];
  }
}
