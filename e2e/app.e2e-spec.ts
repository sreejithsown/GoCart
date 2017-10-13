import { GoCartPage } from './app.po';

describe('go-cart App', () => {
  let page: GoCartPage;

  beforeEach(() => {
    page = new GoCartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
