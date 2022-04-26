**Elements**: are the smallest building blocks of React apps. It describes what you want to see on the screen. An element is like a single frame in a movie: it represents the UI at a certain point in time. A element can be a DOM tag(HTML tag) like `<div>`, or customized `<Welcome>`

**React DOM** compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

**Component**: one or multiple Elements

One React App has a single root DOM node. To render a React **Elements**, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

```js
const element = <h1>Hello, world</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```
