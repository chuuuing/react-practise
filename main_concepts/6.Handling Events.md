# Handling Events

React 与 HTML 中的 Event 不同：

- React 中的 Event 用了 CamelCase 的命名方法。
- React 调用方法使，只需给该方法的字符串即可（不需要在方法后面加`()`）
- 防止默认行为要在 function 中写明`e.preventDefault();`

## Binding handling method

为了使用 component 中的方法，需要在 component 的 constructor 中，把该方法和`this`关键词 bind 起来：

```js
this.handleClick = this.handleClick.bind(this);
```

😡😡😡 _我知道，这个 bind 真的很烦，官方给了两个解决方法可以绕开 bind：_

**方法一** 试用 react 还在试验阶段的功能，这样定义方法：

```js
handleClick = () => {
  console.log('this is:', this);
};
```

**方法二** 调用方法时用 ➡️

```js
<button onClick={() => this.handleClick()}>Click me</button>
```

| HTML                                    | React                                   |
| :-------------------------------------- | :-------------------------------------- |
| `<button onclick="activateLasers()" />` | `<button onClick="activateLasers()" />` |

## 给 handling method 传参

我们通常会多传一个。像这样：

```jsx
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```

或者这样

```jsx
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
