import { ShareClientPage } from './app.po';

describe('share-client App', () => {
  let page: ShareClientPage;

  beforeEach(() => {
    page = new ShareClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
