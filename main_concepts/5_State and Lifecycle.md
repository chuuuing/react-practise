# State vs Props

我们知道 Props 是只读的，而 State 可以被修改的：

## 修改 State 的方法

1. 在`constructor()`中被定义：用`=`

```js
constructor(props) {
    super(props);
    this.counter = 0;
}
```

2. 在其他地方被更新:因为 state 的更新可能是异步的，所以一定要在`setState()`中传入一个方法，而不是数据，像这样：

```js
this.setState((state, props) => ({
  counter: state.counter + 1,
}));
```

# Lifecycle methods

TODO：function component 是怎么用这些方法的

这些方法都是 class component 才有的：
`constructor()`在 component 被 initiated 的时候执行
`componentDidMount()`在 component 被渲染了之后执行
`componentWillUnmount()`
