# CHAPTER 6
## Testing Services

### Using Services
- Services allow you to write non-UI code in a way that is modular, reusable, and testable.
- Angular services are singletons - you create them once and can use them anywhere in your application.
- You shouldn't call web services from your unit tests as there's no way to guarantee the same result for each run of the test, and it would also make your test configuration more complex.

### Dependency Injection
- A system that supplies instances of a dependency at the time your own class is instantiated.
- Allows you to write code that is not tightly coupled to other code.
- Your service just needs to know the interface contract (E.g. What it can do) rather than the implementation details of other modules.
- This also easily allows you to test your services by swapping this depended objects with stubs/mocks.
    - Stub: Barebones class that mimics the actual class's by defining its properties and methods but doesn't contain any logic.
    - Mock: A mock is an object that substitutes for the actual thing.
    - We'll usually mock external dependencies fo injection and create spies for a service's method's.
- Within individual unit tests, you'll use a spy.
    - A spy is a function that invisibly wraps a method and lets you control what value it returns or monitor how it was called.You can measure if a method was called, how many times it was called, and with what arguments.

### What to test
1. Testing the happy path
2. Testing for failure

### Testing services with promises
- When you write tests inside fakeAsync() blocks, they can pretend to fast-forward asynchronous events by calling tick().

### Testing HTTP services with observables
- By using the HttpClientTestingModule allows you to test the HttpClient without having to manually create stubs or configure Angular for testing.
- You'll place the HttpCLientTestingModule in the imports array and call TestBed.get(HttpTestingController)
- Although you're creating a fake server response, such testing technique still relies on the assumption that the server response will match what your code does.
    - One way to deal with this is to write a contract for the service using a specification language.