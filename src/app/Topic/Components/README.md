# CHAPTER 3  
## Testing Components

### Real-world component testing
- Suppose you wish to test a sidebar that has a menu, without having to worry about the menu.
    - In such situations, you can use what are known as shallow tests.
        - Shallow tests let you test components one level deep, ignoring child elements that the element may contains
        - Allows you to test the parent component in isolation.
- In general, you shouldn't have to test private methods, since they'll be exercised by the component's public API; if a method is important enough to be tested, you should consider making it public.
   
### Importing the dependencies
##### Angular test-specific import statements
&nbsp;
Statement|What it does|
---|---|
```import { DebugElement } from '@angular/core'```|You use DebugELement to inspect an Element during testing. You can think of it as similar to HtmlElement with additional properties and methods useful for debugging.|
```import { ComponentFixture } from '@angular/core/testing'```|Creare a fixture that you can use for debugging.|
```import { TestBed } from '@angular/core/testing'```|Used for setting up and configuring your tests. <br> Utility methods that you'll use often are __configureTestingModule()__, __overrideModule()__, and __createComponent()__.|
```import { fakeAsync, tick } from '@angular/core/testing'```|Using fakeAsync() ensures that all asynchronous tasks are completed before executing the assertions. <br>When using fakeAsync(), you can use tick() to simulate the passage of time. It accepts one parameter, which is the number of milliseconds to move time forward, defaults to 0.|
```import { By } from '@angular/platform-browser'```|You use this to select DOM elements.|
```import { NoopAnimationsModule } from '@angular/platform-browser/animations'```|You use the NoopAnimationsModule class to mock animations, which allows you to run tests quickly without waiting for the animations to complete.|
```import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';```|A module that helps bootstrap the browser to be used for testing.|
```import { RouterTestingModule } from '@angular/router/testing';```|Used to setup routing for testing. Some tests may have actions that involve changing routes.|
&nbsp;
##### Example usage of 'By'
- Say you have the html element ```<i class='highlight-row'>```, you'll use the .css() method to retrieve that element using a CSS selector
    - ```By.css('.highlight-row');```
- The methods on the By object are listed in the following table.
&nbsp;

Method|Description|Parameter
---|---|---|
all|Returns all elements|None|
css|Select certain elements by their css attributes|CSS attribute|
directive|Use the name of a directive to select elements|Directve name|
&nbsp;
##### Angular non-test-specific import statements
- ```import { FormsModule } from '@angular/forms';```
    - Needs to be imported if your component contains FormControl's.
- You'll also need to import the Component itself, as well as any child components, directives and pipes used by the component.
&nbsp;
##### Faking injected services
- Usually, we'll fake any dependency injected services as the real services may take actions such as making HTTP calls, which would make the tests harder to run and less deterministic.
    - This can be done by creating a stub of the service and adding it in the providers array when calling ```TestBed.configureTestingModule()```
        - E.g. ```TestBed.configureTestingModule({ providers: [{ provide: ContactService, useValue: ContactServiceStub }] })```
&nbsp;
##### Setting up the tests
- overrideModule() is called to lazy load depended/child components.
    - Lazy loading means that the depended components won't be loaded until the user performs an action to cause them to load.
- The following data shows the optional fields on the TestModuleMetadata object, the argument that is passed to the ```configureTestingModule()``` method.

Field|Data Type|Description|
---|---|---|
declarations|any[]|Where you list components/directives/pipes that the component you're testing may need|
imports|any[]|Array of modules that the component you're testing requires|
providers|any[]|Let's you override the providers/services Angular uses for dependency injection.|
schemas|Array<SchemaMetadata\|any[]>|You use schemas like CUSTOM_ELEMENT_SCHEMA and NO_ERRORS_SCHEMA to allow for certain properties of elements. <br>For example, the NO_ERRORS_SCHEMA will allow for any element that's going to be tested to have any property.|
&nbsp;
##### ```fixture.detectChanges()```
- Triggers a change detection cycle for the component.
    - You need to call it after initializing the component or after chaning a data-bound property value.
- In production, Angular uses zones to know when to run change detection, but in unit tests, such a mechanism does not exist.
    - Instead, you need to call detectChanges() frequently in your tests after making changes to a component.
- Accessing ```fixture.componentInstance``` for the first time would trigger ngOnInit, so after calling this, we should then call ```fixture.detectChanges()```.
&nbsp;
##### Miscellaneous
- The __nativeElement__ object is an Angular wrapper around the built-in DOM native element.