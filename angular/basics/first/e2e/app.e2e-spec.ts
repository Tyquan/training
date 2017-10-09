import { FirstPage } from './app.po';

describe('first App', () => {
  let page: FirstPage;

  beforeEach(() => {
    page = new FirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
