/**
 * XPath - XML Path Language
 * 
 * XPath is a query language used to select nodes in an XML/HTML document.
 * It uses a path-like syntax to navigate through the DOM tree.
 * 
 * ADVANTAGES OF XPATH:
 * - Can traverse both forward and backward in the DOM
 * - Can select elements based on text content
 * - Can use complex conditions and functions
 * - More flexible than CSS selectors
 * 
 * TYPES OF XPATH:
 * 1. Absolute XPath: Full path from root element
 * 2. Relative XPath: Path starting from any element (more flexible)
 */

import { test, expect } from '@playwright/test';

test.describe('XPath Examples - Simple and Practical', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to a sample page for testing
        await page.goto('https://www.saucedemo.com/');
    });

    // ============================================
    // 1. BASIC XPath SYNTAX
    // ============================================

    test('1. Basic XPath - Select by Tag Name', async ({ page }) => {
        /**
         * //* selects all elements
         * //tagname selects all elements with specific tag
         * Example: //input selects all input elements
         */
        const inputs = await page.locator('//input').count();
        console.log('Total input elements:', inputs);
        expect(inputs).toBeGreaterThan(0);
    });

    test('2. XPath with Attribute - Select by ID', async ({ page }) => {
        /**
         * //*[@attribute='value'] - Select by any attribute
         * //input[@id='user-name'] - Select input with id="user-name"
         * Example: Select username input field
         */
        await page.locator('//input[@id="user-name"]').fill('standard_user');
        const value = await page.locator('//input[@id="user-name"]').inputValue();
        expect(value).toBe('standard_user');
    });

    test('3. XPath with Multiple Attributes', async ({ page }) => {
        /**
         * Use 'and' to combine multiple conditions
         * //input[@id="user-name" and @type="text"]
         * This selects input with both id="user-name" AND type="text"
         */
        const element = page.locator('//input[@id="user-name" and @type="text"]');
        await element.fill('admin');
        expect(await element.inputValue()).toBe('admin');
    });

    test('4. XPath with Partial Attribute Match (starts-with)', async ({ page }) => {
        /**
         * //tagname[starts-with(@attribute, 'value')]
         * Matches element where attribute starts with specified text
         * Example: //input[starts-with(@id, 'user')] 
         * Selects input where id starts with 'user'
         */
        const element = page.locator('//input[starts-with(@id, "user")]');
        await element.fill('test_user');
        expect(await element.inputValue()).toBe('test_user');
    });

    test('5. XPath with Partial Attribute Match (contains)', async ({ page }) => {
        /**
         * //tagname[contains(@attribute, 'value')]
         * Matches element where attribute contains specified text anywhere
         * Example: //button[contains(@class, 'btn')]
         * Selects button where class contains 'btn'
         */
        const loginButton = page.locator('//input[contains(@name, "login-button")]');
        await expect(loginButton).toBeVisible();
    });

    test('6. XPath with Text Content', async ({ page }) => {
        /**
         * //tagname[text()='exact text']
         * Selects element with exact text match
         * Example: //button[text()='LOGIN'] selects button with text "LOGIN"
         */
        const button = page.locator('//input[@value="LOGIN"]');
        await expect(button).toBeVisible();
    });

    test('7. XPath with Partial Text Match (contains)', async ({ page }) => {
        /**
         * //tagname[contains(text(), 'partial text')]
         * Matches element where text contains specified string
         * Example: //a[contains(text(), 'Home')]
         */
        await page.goto('https://www.saucedemo.com/');
        // This would select links containing 'Home' in their text
    });

    // ============================================
    // 2. POSITION-BASED XPath
    // ============================================

    test('8. XPath with Position - First Element', async ({ page }) => {
        /**
         * //tagname[position()=1] or //tagname[1]
         * Selects element at specific position
         * Example: //input[1] selects first input element
         */
        const firstInput = page.locator('//input[1]');
        await expect(firstInput).toBeVisible();
    });

    test('9. XPath with Position - Last Element', async ({ page }) => {
        /**
         * //tagname[last()]
         * Selects the last element of its type
         * Example: //input[last()] selects last input element
         */
        const lastInput = page.locator('//input[last()]');
        await expect(lastInput).toBeVisible();
    });

    // ============================================
    // 3. PARENT-CHILD RELATIONSHIP XPath
    // ============================================

    test('10. XPath with Parent-Child Relationship', async ({ page }) => {
        /**
         * //parent/child
         * Navigate from parent to child element
         * Example: //div[@class="login-box"]/input
         * Selects input elements inside div with class "login-box"
         */
        const input = page.locator('//div[@class="login_wrapper"]/form/input');
        await expect(input).toBeVisible();
    });

    test('11. XPath with Parent Navigation (.. operator)', async ({ page }) => {
        /**
         * Use (..) to select parent element
         * //input[@id="user-name"]/..
         * Selects the parent element of input with id="user-name"
         */
        const parent = page.locator('//input[@id="user-name"]/..');
        await expect(parent).toBeVisible();
    });

    test('12. XPath with Ancestor Navigation', async ({ page }) => {
        /**
         * //tagname/ancestor::parenttagname
         * Select ancestor element of specific type
         * Example: //input[@id="user-name"]/ancestor::form
         * Selects form that contains this input
         */
        const form = page.locator('//input[@id="user-name"]/ancestor::form');
        await expect(form).toBeVisible();
    });

    test('13. XPath with Following Sibling', async ({ page }) => {
        /**
         * //tagname/following-sibling::siblingtagname
         * Selects sibling elements that come after current element
         * Example: //label/following-sibling::input
         */
        const input = page.locator('//form/following-sibling::footer');
        // Navigation example
    });

    test('14. XPath with Preceding Sibling', async ({ page }) => {
        /**
         * //tagname/preceding-sibling::siblingtagname
         * Selects sibling elements that come before current element
         * Example: //input/preceding-sibling::label
         */
        const label = page.locator('//input[@id="user-name"]/preceding-sibling::label');
        // Navigate to preceding elements
    });

    // ============================================
    // 4. COMPLEX XPath CONDITIONS
    // ============================================

    test('15. XPath with OR Condition', async ({ page }) => {
        /**
         * //tagname[@attr1='value1' or @attr2='value2']
         * Selects element matching either condition
         * Example: //input[@id="user-name" or @id="password"]
         */
        const element = page.locator('//input[@name="user-name" or @name="password"]');
        await expect(element).toBeVisible();
    });

    test('16. XPath with Normalized Text (handles whitespace)', async ({ page }) => {
        /**
         * normalize-space() removes extra whitespace
         * //tagname[normalize-space()='exact text']
         * Useful when text has extra spaces/newlines
         */
        const button = page.locator('//input[normalize-space(@value)="LOGIN"]');
        await expect(button).toBeVisible();
    });

    test('17. XPath with Substring Match', async ({ page }) => {
        /**
         * //tagname[substring(@attribute, start, length)]
         * Extracts substring from attribute
         * Example: //input[substring(@id, 1, 4)='user']
         * Matches id starting with 'user'
         */
        const input = page.locator('//input[substring(@id, 1, 4)="user"]');
        await expect(input).toBeVisible();
    });

    // ============================================
    // 5. PRACTICAL REAL-WORLD EXAMPLES
    // ============================================

    test('18. Real-World: Login Form Example', async ({ page }) => {
        /**
         * Practical example: Locate and fill login form
         */
        // Select username input
        await page.locator('//input[@id="user-name"]').fill('standard_user');

        // Select password input
        await page.locator('//input[@id="password"]').fill('secret_sauce');

        // Select login button
        await page.locator('//input[@id="login-button"]').click();

        // Verify successful login
        await page.waitForURL('**/inventory.html');
        expect(page.url()).toContain('inventory');
    });

    test('19. Real-World: Select by Dynamic Attribute', async ({ page }) => {
        /**
         * When element IDs/classes are dynamic (change on page reload)
         * Use more stable attributes like data-testid, role, or text
         */
        // Using contains for flexible matching
        const button = page.locator('//button[contains(@class, "btn") and contains(text(), "Login")]');
        // More reliable for dynamic content
    });

    test('20. Real-World: Complex Form Selection', async ({ page }) => {
        /**
         * Select form elements with multiple conditions
         * //*[@type='text' and @placeholder='Username' and @required]
         * Selects text input with placeholder and required attribute
         */
        const element = page.locator('//*[@type="text" and contains(@id, "user")]');
        await expect(element).toBeVisible();
    });

});

/**
 * QUICK REFERENCE CHEAT SHEET:
 * 
 * Basic Syntax:
 * /tagname               - Select from root
 * //tagname              - Select anywhere in document
 * @attribute             - Select by attribute
 * /text()                - Select by text content
 * [1]                    - Select by position
 * ..                     - Select parent
 * 
 * Predicates:
 * [@id='value']          - Select by attribute value
 * [starts-with(@id, 'u')]- Starts with condition
 * [contains(@class, 'active')] - Contains condition
 * [position()=1]         - Position based
 * [last()]               - Last element
 * 
 * Axes:
 * /parent                - Parent elements
 * /ancestor::            - Ancestor elements
 * /following-sibling::   - Sibling after
 * /preceding-sibling::   - Sibling before
 * /child::               - Child elements
 * /descendant::          - All descendants
 * 
 * Functions:
 * text()                 - Text content
 * normalize-space()      - Remove extra whitespace
 * contains()             - Partial match
 * starts-with()          - Begins with
 * substring()            - Extract substring
 * count()                - Count elements
 */
