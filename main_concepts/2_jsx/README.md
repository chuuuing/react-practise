# JSX

JSX = Javascript Syntax eXtension, and it produces React “elements”.

## React Component

React agrees that **rendering logic** is coupled with other **UI logic** such as:

- how events are handled
- how the state changes over time
- how the data is prepared for display

React **Component** uses JSX to include both **rendering logic** and **UI logic**. JSX is not required by React, but it is recommended.

## JSX Grammar

| Grammar                                   | Explanation                                                      |
| :---------------------------------------- | :--------------------------------------------------------------- |
| `const element = <h1>Hello, {name}</h1>;` | use `{}` to process js: element's content OR element's attribute |
| `const element = (<div>.....</div>`       | use `()` to wrap multi-line JSX                                  |

## JSX Convention

- camelCase naming

## JSX Feature

- it prevents (User) Injection Attacks: it escapes all the user-input values

## JSX Compiler

1. (Original code) JSX:

```JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

2. (Middle result) Babel compiled JSX:

```JSX
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

3. (End) React element:

```
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

WAY 2 - `React.createElement()` performs a few checks to help you write bug-free code

IDE setup for JSX: https://babeljs.io/docs/en/editors
