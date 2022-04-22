# Resources

本文中记录了两种方式

- 第一种：用 html 元素自己写：https://www.youtube.com/watch?v=ZCvemsUfwPQ&ab_channel=PedroTech
- 第二种：用 react-bootstrap 元素：https://react-bootstrap.github.io/components/modal/

**第一种**将一个 function 作为 props 传给了子组件
**第二种**直接将 Modal 所需的 props（`show`包含了一个值，`onHide`包含了一个方法）传给了子组件，这两个 props 是 react-bootstrap 的 Modal 本来就有的，在子组件中用`<Modal {...props} .../>`来展开从父组件中得到的 props
