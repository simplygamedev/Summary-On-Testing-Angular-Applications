# CHAPTER 1 
## Introduction to testing Angular applications

### Why write tests at all?
1. Gives you reassurance that your code changes/bugfixes do not break existing features
2. Allows you to refactor existing code confidently
3. Often when you find it difficult to write a test for a code, chances are high that your code may be too complex and require refactoring.

### Angular testing overview
- Most Angular testing involves either unit or end-to-end (e2e) testing.
- Unit testing: Software testing where individual units/ components of a software are tested
- e2e testing: Software testing where the entire software product's specific business flow is tested from beginning to end to ensure the application flow behaves as expected.
- Angular is built-in to use the testing tools Karma and Jasmine framework for unit testing.
- Angular currently uses cypress for unit testing, in the past protracter was used.

### Things that can and should be unit tested in Angular
1. Pure classes
2. Components
3. Directives
4. Pipes
5. Services
6. Routing

### Typescript features
- Common ES6 features: Default parameters, Classes, Block scoped variables, Template literals, Modules, Promises, Arrow functions, Destructuring assignment
- Typescript features: Type annotations, Instance members, Function overloads, Access modifiers, Static members, Interfaces

### Test types
##### Unit tests
- Test the functionality of basic parts/units of code.
- Each unit test should only test one responsibility of the source code.
- Tends to be fast, reliable, and repeatable.
- Writing unit testscan also help identify needlessly complex code that may be difficult to test.

##### E2E tests
- Test the functionality of an application by simulating the behaviour of the end user.
- Good for testing the application from the end users standpoint
- Can be slow, which may result in may false positives due to timeout issues.

![Testing Pyramid](https://www.duncannisbet.co.uk/wp-content/uploads/2012/07/test_pyramid-300x218.gif "Testing Pyramid")