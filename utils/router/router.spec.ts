import {expect} from 'chai';
import Error from '../../src/pages/Error/index';
import Router from './router';

const {JSDOM} = require('jsdom');

describe('Check Router', () => {
  let router: Router;
  before(() => {
    const dom = new JSDOM(
      `<html>
    <head>
    </head>
    <body style="margin: 0">
      <main id="root"></main>
    </body>
  </html>`,
      {url: 'http://localhost:3000'}
    );

    global.window = dom.window;
    global.document = dom.window.document;

    router = new Router('#root');
  });

  beforeEach(() => {
    router.use('/login', new Error({}));
    router.use('/404', new Error({})).start();
  });

  it('Check if router added', () => {
    expect(router.routes[0]._pathname).to.eq('/login');
  });

  it('Check go to correct page', () => {
    router.go('/404');
    expect(window.location.href).to.eq('http://localhost:3000/404');
  });

  it('Check return seleted router', () => {
    expect(router.getRoute('/404')?._pathname).to.eq('/404');
  });
});
