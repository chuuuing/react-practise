## Add React

```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
```

## Add JSX

```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

In Terminal run the following:

1 Step: create package.json

```
npm init -y
```

2 Step: add _dependencies_

```
npm install babel-cli@6 babel-preset-react-app@3
```

You will see these added in package.json

```
"dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-react-app": "^3.1.2"
  }
```

3 Step: run JSX Preprocessor: create `src` folder, then run this:

```
npx babel --watch src --out-dir . --presets react-app/prod
```

`npx` is a package runner tool. Don’t wait for it to finish — this command starts an automated watcher for JSX.
