import { CloudManagementPage } from './app.po';

describe('cloud-management App', () => {
  let page: CloudManagementPage;

  beforeEach(() => {
    page = new CloudManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
