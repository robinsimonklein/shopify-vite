// eslint-disable-next-line import/no-unresolved
import 'vite/modulepreload-polyfill';
import '../styles/main.scss';
import { Application } from '@hotwired/stimulus';
import { registerControllers } from 'stimulus-vite-helpers';

const application = Application.start();
const controllers = import.meta.globEager('./**/*_controller.js');
registerControllers(application, controllers);
