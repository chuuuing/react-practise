Create app using **React toolchains**. THere are several **toolchains** for different purposes. Depends on what you what to build!

# Popular **React toolchains**:

## 1. create-react-app

create react app using toolchain **create-react-app**:

```shell
npx create-react-app my-app
```

if encounter ERROR like this: It means you have an old version of `create-react-app`.

```shell
You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0)
```

**Method 1**: (In Mac) We can clean out the old version using:

```shell
npx clear-npx-cache
rm -rf ~/.npm/_npx
npx create-react-app your-app
```

**Method 2**: clean cache

```shell
npm uninstall -g create-react-app
npm cache clean --force
npm cache verify
npx create-react-app my-app
```

## 2. next-js

`Next.js` is a lightweight framework of React(assume you use `Node.js` as server). Including:

- server‑rendered applications
- styling
- routing solutions

## 3. `Gatsby`

Best way to create **static websites** with React. It lets you use React components, but outputs **pre-rendered HTML and CSS** to guarantee the fastest load time.

# How to build a **toolchain** from scratch?

A JavaScript toolchain consists of:

1. **package manager**: such as `Yarn` or `npm`. To manage third-party packages, and easily install or update them.
2. **bundler**: such as `webpack` or `Parcel`. It lets you write modular code and bundle it together into small packages to optimize load time.
3. **compiler**: such as `Babel`. It lets you write modern JavaScript code that still works in older browsers.

To manually choose from those 3 tool types and build your **own** toolchain. Check this [tutorial](https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658)
