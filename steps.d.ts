/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type homePage = typeof import('./pages/home.js');
type registerPage = typeof import('./pages/register.js');
type buyPage = typeof import('./pages/buy.js');
type signinPage = typeof import('./pages/signin.js');
type accountPage = typeof import('./pages/account.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, homePage: homePage, registerPage: registerPage, buyPage: buyPage, signinPage: signinPage, accountPage: accountPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
