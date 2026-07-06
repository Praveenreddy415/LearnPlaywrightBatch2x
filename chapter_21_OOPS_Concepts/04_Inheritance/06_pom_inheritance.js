// chapter_21_OOPS_Concepts/04_Inheritance/06_pom_inheritance.js

// This is a real-time example of inheritance using the Page Object Model (POM).
// In POM, each page in an application is represented by a class.
// A child page class can inherit common behavior from a base page class.

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        console.log(`Opening page: ${url}`);
        // In real tests: await this.page.goto(url);
    }

    async click(selector) {
        console.log(`Clicking element: ${selector}`);
        // In real tests: await this.page.click(selector);
    }

    async type(selector, text) {
        console.log(`Typing '${text}' into: ${selector}`);
        // In real tests: await this.page.fill(selector, text);
    }
}

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async login(username, password) {
        await this.open('https://example.com/login');
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        await this.click(this.loginButton);
        console.log('Login action performed.');
    }
}

(async () => {
    const fakePage = {}; // placeholder for a Playwright page object
    const loginPage = new LoginPage(fakePage);

    await loginPage.login('student', 'password123');
})();

// In simple terms:
// - BasePage is like a parent that knows how to open pages, click buttons, and type text.
// - LoginPage is a child that inherits those abilities.
// - LoginPage adds its own login steps using the parent methods.
// - This is inheritance in a real test example.
