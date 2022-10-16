# CHAPTER 5
## Testing Pipes

### Using Pipes
- Often you'll want to modify data that's displayed in a template.
- Pipes take input, transform it, and then return some transformed value.
    - A function whose output only depends on the input is called a pure function.
    - A function whose output does not only depend on its input or modifies other variables is said to have a side-effect.
    - Pure functions like pipes don't have side effects, which makes them easier to test.
