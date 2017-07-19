import { TutorialAppPage } from './app.po';

describe('tutorial-app App', () => {
  let page: TutorialAppPage;

  beforeEach(() => {
    page = new TutorialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
