import { ScalesPage } from './app.po';

describe('scales App', function() {
  let page: ScalesPage;

  beforeEach(() => {
    page = new ScalesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
