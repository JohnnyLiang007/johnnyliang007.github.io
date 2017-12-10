import { CloudMgSystemPage } from './app.po';

describe('cloud-mg-system App', () => {
  let page: CloudMgSystemPage;

  beforeEach(() => {
    page = new CloudMgSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
