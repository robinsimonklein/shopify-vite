import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    // eslint-disable-next-line no-console
    console.log('Hello stimulus', this.element);
  }
}
