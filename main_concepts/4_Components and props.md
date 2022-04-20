# Component

**Components** are like JavaScript functions:

- INPUT: arbitrary inputs (called “props”)
- OUTPUT: React elements

There are 2 Component types:

- function component:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- ES6 class:

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

# Props

Props 作为 function component 的输入参数，一般是只读的，不修改他们的值。

# Convention

- DOM(HTML) tag: lowercase <div />
- CUSTOMIZED Component: Uppercase <Welcome />