# XPath Cheat Sheet - Complete Reference Guide

## Table of Contents
1. [Basic XPath Syntax](#basic-xpath-syntax)
2. [Selection Methods](#selection-methods)
3. [Predicates & Conditions](#predicates--conditions)
4. [Functions](#functions)
5. [Axes](#axes)
6. [Practical Examples](#practical-examples)
7. [Quick Tips](#quick-tips)

---

## Basic XPath Syntax

| Symbol | Meaning | Example | Description |
|--------|---------|---------|-------------|
| `/` | Absolute path from root | `/html/body/div` | Selects elements from root |
| `//` | Search anywhere | `//input` | Selects all input elements anywhere |
| `.` | Current node | `.//div` | Selects div from current node |
| `..` | Parent node | `//input/..` | Selects parent of input |
| `@` | Attribute | `@id` | References attribute |
| `*` | Any element | `//*` | Selects all elements |
| `\|` | Union (OR) | `//input \| //button` | Selects both input and button |

---

## Selection Methods

### By Tag Name

| XPath | Description | Example |
|-------|-------------|---------|
| `//tagname` | All elements with tag | `//button` - All buttons |
| `//tagname[1]` | First element | `//input[1]` - First input |
| `//tagname[last()]` | Last element | `//div[last()]` - Last div |
| `//tagname[position()=2]` | Specific position | `//tr[position()=2]` - 2nd row |

### By Attribute

| XPath | Description | Example |
|-------|-------------|---------|
| `//*[@id='value']` | By ID attribute | `//input[@id='username']` |
| `//*[@class='value']` | By class attribute | `//div[@class='container']` |
| `//*[@name='value']` | By name attribute | `//input[@name='email']` |
| `//*[@type='value']` | By type attribute | `//input[@type='text']` |
| `//*[@data-testid='value']` | By data attribute | `//button[@data-testid='login']` |
| `//*[@placeholder='value']` | By placeholder | `//input[@placeholder='Enter name']` |

### By Text Content

| XPath | Description | Example |
|-------|-------------|---------|
| `//tagname[text()='exact']` | Exact text match | `//button[text()='LOGIN']` |
| `//tagname[contains(text(),'partial')]` | Partial text match | `//a[contains(text(),'Home')]` |
| `//tagname[starts-with(text(),'prefix')]` | Text starts with | `//h1[starts-with(text(),'Welcome')]` |
| `//tagname[normalize-space()='text']` | Exact text (ignores whitespace) | `//span[normalize-space()='Submit']` |

---

## Predicates & Conditions

### Single Conditions

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Equals | `[@id='login']` - ID equals 'login' |
| `!=` | Not equals | `[@type!='hidden']` - Type is not hidden |
| `>` | Greater than | `[@length>5]` - Length greater than 5 |
| `<` | Less than | `[@count<10]` - Count less than 10 |
| `>=` | Greater or equal | `[@value>=100]` - Value >= 100 |
| `<=` | Less or equal | `[@value<=50]` - Value <= 50 |

### Multiple Conditions

| Operator | Description | Example |
|----------|-------------|---------|
| `and` | Both conditions true | `[@id='user' and @type='text']` |
| `or` | Either condition true | `[@id='user' or @id='email']` |
| `not()` | Negation | `[not(@disabled)]` - Not disabled |

### Attribute Conditions

| Predicate | Description | Example |
|-----------|-------------|---------|
| `[starts-with(@attr,'value')]` | Attribute starts with | `[starts-with(@id,'btn_')]` |
| `[ends-with(@attr,'value')]` | Attribute ends with | `[ends-with(@href,'.pdf')]` |
| `[contains(@attr,'value')]` | Attribute contains | `[contains(@class,'active')]` |
| `[@attr]` | Attribute exists | `[@disabled]` - Has disabled attribute |

---

## Functions

### String Functions

| Function | Description | Example |
|----------|-------------|---------|
| `text()` | Get element text | `//button[text()='Click']` |
| `normalize-space()` | Remove extra whitespace | `normalize-space()='Submit'` |
| `substring()` | Extract substring | `substring(@id,1,4)='user'` |
| `substring-after()` | Text after pattern | `substring-after(@id,'_')` |
| `substring-before()` | Text before pattern | `substring-before(@id,'_')` |
| `contains()` | Check if contains | `contains(@class,'btn')` |
| `starts-with()` | Check if starts with | `starts-with(@id,'form')` |
| `ends-with()` | Check if ends with | `ends-with(@href,'.html')` |
| `string-length()` | Get string length | `[string-length(@id)>5]` |
| `translate()` | Replace characters | `translate(@id,'_','-')` |

### Numeric Functions

| Function | Description | Example |
|----------|-------------|---------|
| `count()` | Count elements | `count(//tr)` - Count rows |
| `sum()` | Sum values | `sum(//price)` - Sum all prices |
| `floor()` | Round down | `floor(3.7)` = 3 |
| `ceiling()` | Round up | `ceiling(3.2)` = 4 |
| `round()` | Round to nearest | `round(3.5)` = 4 |

### Boolean Functions

| Function | Description | Example |
|----------|-------------|---------|
| `not()` | Logical NOT | `[not(@disabled)]` |
| `true()` | Return true | `[true()]` |
| `false()` | Return false | `[false()]` |

### Position Functions

| Function | Description | Example |
|----------|-------------|---------|
| `position()` | Element position | `//tr[position()=2]` |
| `last()` | Last element | `//tr[last()]` |
| `first()` | First element | `//tr[first()]` |

---

## Axes

### Navigation Axes

| Axis | Description | Example |
|------|-------------|---------|
| `child::` | Child elements | `//form/child::input` |
| `parent::` | Parent element | `//input/parent::form` |
| `ancestor::` | All ancestors | `//input/ancestor::div` |
| `ancestor-or-self::` | Ancestors + self | `//div/ancestor-or-self::body` |
| `descendant::` | All descendants | `//div/descendant::a` |
| `descendant-or-self::` | Descendants + self | `//form/descendant-or-self::*` |
| `following::` | Elements after | `//h1/following::p` |
| `following-sibling::` | Siblings after | `//input/following-sibling::button` |
| `preceding::` | Elements before | `//button/preceding::input` |
| `preceding-sibling::` | Siblings before | `//button/preceding-sibling::label` |
| `self::` | Current element | `//div/self::div` |

### Shorthand Axes

| Shorthand | Full Axis | Example |
|-----------|-----------|---------|
| `/` | `child::` | `//form/input` = `//form/child::input` |
| `//` | `descendant-or-self::` | `//div//span` = `//div/descendant-or-self::span` |
| `@` | `attribute::` | `@id` = `attribute::id` |
| `..` | `parent::` | `//input/..` = `//input/parent::node()` |
| `.` | `self::` | `.` = `self::node()` |

---

## Practical Examples

### Login Form Automation

| Scenario | XPath | Description |
|----------|-------|-------------|
| Username field | `//input[@id='username']` | Select by ID |
| Password field | `//input[@type='password']` | Select by type |
| Login button | `//button[text()='Login']` | Select by text |
| Form container | `//form[@name='loginForm']` | Select form by name |
| Error message | `//div[@class='error']` | Select error div |
| Remember checkbox | `//input[@type='checkbox' and @name='remember']` | Multiple conditions |

### Table Navigation

| Scenario | XPath | Description |
|----------|-------|-------------|
| All rows | `//table/tr` | All table rows |
| Specific row | `//table/tr[2]` | 2nd row |
| Last row | `//table/tr[last()]` | Last row |
| Row with text | `//tr[contains(td, 'John')]` | Row containing John |
| Specific cell | `//tr[2]/td[3]` | 2nd row, 3rd column |
| Table header | `//table//thead/tr/th` | All header cells |
| Cell by header | `//tr/td[preceding-sibling::th[text()='Name']]` | Cell under Name column |

### Dynamic Elements

| Scenario | XPath | Description |
|----------|-------|-------------|
| Partial ID match | `//input[starts-with(@id,'btn')]` | ID starts with 'btn' |
| Partial class match | `//div[contains(@class,'active')]` | Class contains 'active' |
| Dynamic data-id | `//button[@data-id='123']` | By data attribute |
| Multiple classes | `//div[contains(@class,'box') and contains(@class,'blue')]` | Multiple classes |
| Not disabled | `//button[not(@disabled)]` | Enabled buttons |

### Dropdown/Select Elements

| Scenario | XPath | Description |
|----------|-------|-------------|
| All options | `//select[@id='dropdown']/option` | All dropdown options |
| Option by text | `//option[text()='Select Me']` | Option with specific text |
| Selected option | `//option[@selected]` | Currently selected option |
| Option by value | `//option[@value='123']` | Option with specific value |

### Navigation & Links

| Scenario | XPath | Description |
|----------|-------|-------------|
| All links | `//a` | All anchor tags |
| Link by text | `//a[text()='Home']` | Link with exact text |
| Link by partial text | `//a[contains(text(),'Contact')]` | Link containing text |
| Link by href | `//a[@href='/about']` | Link with specific href |
| External links | `//a[starts-with(@href,'http')]` | Links starting with http |

---

## Quick Tips

### Common Patterns

| Pattern | Use Case | Example |
|---------|----------|---------|
| `//tagname[@attribute]` | Element has attribute | `//input[@required]` |
| `//tagname[not(@attribute)]` | Element missing attribute | `//button[not(@disabled)]` |
| `//parent/child` | Direct child only | `//form/input` |
| `//parent//child` | Any descendant | `//div//span` |
| `//tagname[1]` | First of type | `//tr[1]` |
| `//tagname[last()]` | Last of type | `//tr[last()]` |
| `//tagname[position()>1]` | All except first | `//tr[position()>1]` |

### Boolean Logic

| Logic | Operator | Example |
|-------|----------|---------|
| AND | `and` | `[@id='x' and @type='text']` |
| OR | `or` | `[@id='x' or @id='y']` |
| NOT | `not()` | `[not(@disabled)]` |
| Complex | Combine all | `[(@type='text' or @type='email') and not(@readonly)]` |

### Best Practices

| Practice | Good ✓ | Bad ✗ |
|----------|--------|-------|
| **Specific attributes** | `[@data-testid='submit']` | `//button[3]` |
| **Meaningful selectors** | `//button[text()='Login']` | `//div[@class='x123']` |
| **Not position-dependent** | `//input[@id='email']` | `//form/div[2]/input[1]` |
| **Use stable IDs** | `[@id='user-form']` | `[@id='d_1234567']` (dynamic) |
| **Combine conditions** | `[@type='text' and @required]` | Multiple separate locators |
| **Shorter XPath** | `//input[@id='user']` | `//html/body/form[1]/input[1]` |

---

## Complex Examples

### Real-World Scenarios

#### Example 1: Find Active Navigation Item
```xpath
//nav//li[contains(@class,'active')]/a
```
Finds the anchor tag inside an active navigation list item

#### Example 2: Get Table Row by Column Value
```xpath
//table//tr[td[1]='John' and td[2]='Smith']
```
Finds row where first column is 'John' AND second column is 'Smith'

#### Example 3: Select Last N Elements
```xpath
//tr[position() > last()-2]
```
Selects last 2 table rows (last() - 2 means position from end)

#### Example 4: Find Button by Multiple Classes
```xpath
//button[contains(@class,'btn') and contains(@class,'primary') and not(@disabled)]
```
Button with both 'btn' AND 'primary' classes, but NOT disabled

#### Example 5: Select Next Sibling Element
```xpath
//h2[text()='Contact']/following-sibling::form[1]
```
Form that comes immediately after an h2 with text 'Contact'

#### Example 6: Find Parent Form of Input
```xpath
//input[@name='email']/ancestor::form[@id='contactForm']
```
Form with ID 'contactForm' that contains an input named 'email'

#### Example 7: Select Elements with Attribute Containing Pattern
```xpath
//input[substring(@name, string-length(@name)-3)='name']
```
Inputs where the name attribute ends with 'name' (e.g., 'firstname', 'lastname')

#### Example 8: Case-Insensitive Match (Using translate)
```xpath
//button[contains(translate(@value,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'submit')]
```
Button containing 'submit' regardless of case

---

## Playwright Integration Examples

```javascript
// Basic XPath in Playwright
await page.locator('//button[@id="submit"]').click();

// Multiple conditions
await page.locator('//input[@type="text" and @required]').fill('test');

// By text
const button = page.locator('//button[text()="Submit"]');

// Parent navigation
const form = page.locator('//input[@id="email"]/ancestor::form');

// Sibling selection
const nextButton = page.locator('//label[text()="Terms"]/following-sibling::button[1]');

// Complex conditions
const element = page.locator('//div[contains(@class,"active") and not(@disabled)]/a[starts-with(@href,"/api")]');
```

---

## Common Mistakes to Avoid

| ❌ Wrong | ✓ Correct | Reason |
|---------|-----------|--------|
| `//button[0]` | `//button[1]` | XPath uses 1-based indexing |
| `//div[@class = 'active']` | `//div[@class='active']` | No spaces around = |
| `//button and @id='x'` | `//button[@id='x']` | Conditions go in brackets |
| `//div/div/div/span` | `//div//span` | Too specific, fragile |
| `//input[contains(text(),'ok')]` | `//button[contains(text(),'OK')]` | Input has no text content |
| `//button[@class='btn primary']` | `//button[contains(@class,'btn') and contains(@class,'primary')]` | Class with multiple values |

---

## Testing Your XPath

### In Browser Console
```javascript
// Get count
$x('//button').length

// Get first match
$x('//button')[0]

// Get text of elements
$x('//button').map(e => e.textContent)
```

### In Playwright
```javascript
// Count elements
const count = await page.locator('//button').count();

// Get text
const text = await page.locator('//button[1]').textContent();

// Check if exists
const isVisible = await page.locator('//button[@id="submit"]').isVisible();
```

---

**Last Updated:** 2026-07-29  
**Reference:** XPath 1.0 Standard with Playwright Integration
