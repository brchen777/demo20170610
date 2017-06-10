import { Demo0610Page } from './app.po';

describe('demo0610 App', () => {
  let page: Demo0610Page;

  beforeEach(() => {
    page = new Demo0610Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
