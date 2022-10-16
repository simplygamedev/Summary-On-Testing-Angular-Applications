# CHAPTER 2
## Testing Pure Classes 

### Writing tests using the Jasmine testing framework
- The Jasmine framework is a behaviour-driven framework, allowing you to write tests that explains the behaviour of your program.
- It provides a few essential functions to achieve the above.
&nbsp;

Function Name|Description|Example|
---|---|---|
describe()|Used to group together a series of tests (Aka a Test Suite)|``` describe("save() method", () => { ... }); ```
it()|For creating a specific test, it is usually placed inside a describe function|``` it("save() method", () => { ... }); ```
expect()|You create a test assertion by using an expect() function. A test assertion is the condition you want your test to check to be true.|```expect(someBooleanVariable).toBe(true)```

### Running tests in Angular
- Generally your unit test files in Angular should have .spec in their names (E.g. stands for specifying/specification, my-test.spec.ts)
- Unit tests can be executed by running the command ng test.
- You can use the --include flag to only run specific test files.
- Tests should automatically update if you left the test server running while changing your code.

### Testing Classes
- It's generally a good idea to keep your tests in the same directory as the module you'll be testing.
- The __beforeEach()__ method
    - Resetting variables that have been manipulated inside a test helps make sure that each test runs independently of other prior tests, so as to prevent side effects.
    - The part of the tests where you do so is called the Setup, and you use the beforeEach() method for that
    - E.g. ```beforeEach(() => { contact = new ContactClass() });
- The __afterEach()__ method
    - Used for test teardowns
    - Destroy instances of variables to avoid memory leaks.
    - E.g. ```afterEach(() => { contact = null; });
