# 目录

- [安装 TS](#安装-ts)
  - [新建一个带 TS 的 React 项目](#新建一个带-ts-的-react-项目)
  - [将 TS 加入已存在的 React 项目](#将-ts-加入已存在的-react-项目)
- [tsc 命令](#tsc命令)
  - [常用参数](#常用参数)
  - [tsc 命令例子](#tsc命令例子)
- [数据类型](#数据类型)
  - [JavaScript](#javascript)
  - [TypeScript](#typescript)
- [配置文件 tsconfig.json](#配置文件-tsconfigjson)
- [如何使用 TS - 类型注释 &amp; 类型推断](#如何使用-ts---类型注释--类型推断)
  - [类型注释（Type Annotation）](#类型注释type-annotation)
  - [类型推断（Type Inference）](#类型推断type-inference)
- [如何使用 TS - 变量 &amp; 函数](#如何使用-ts---变量--函数)
  - [变量](#变量)
  - [函数](#函数)

# 安装 TS

## 新建一个带 TS 的 React 项目

```shell
npx create-react-app my-app --template typescript
```

## 将 TS 加入已存在的 React 项目

```shell
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

# `tsc`命令

`tsc` 是 TypeScript 转译的命令，使用它可以将 TS 文件编译成 JS 文件。当执行`tsc`命令时，ts 编译器会首先在当前目录寻找 tsconfig.json 文件，如果当前目录没有 tsconfig.json 文件，它会一直向上级目录寻找，直到找到一个 tsconfig.json 文件，tsconfig.json 文件所在的目录为项目的根目录。

## 常用参数

- `-w`: 观察源码的变化持续转译
- `--noImplicitAny`：如果 TypeScript 无法推断类型，我们必须指定它。 这主要适用于函数和方法的参数：有了这个设置，我们必须对其进行注释。
- `--noImplicitThis`：如果 this 的类型不清楚，请抱怨。
- `--alwaysStrict`：尽可能使用 JavaScript 的严格模式。
- `--strictNullChecks`：null 不是任何类型的一部分（除了它自己的类型 null），如果它是可接受的值，则必须明确提及。
- `--strictFunctionTypes`：对函数类型进行更强的检查。
- `--strictPropertyInitialization`：如果一个属性不能有 undefined 的值，那么它必须在构造函数中初始化。

## `tsc`命令例子

| 例子               | 描述               |
| :----------------- | :----------------- |
| `tsc src/index.ts` | 编译文件`index.ts` |

# 数据类型

## JavaScript

JS 的数据类型都是动态的（**Dynamic**）：我们在**运行**时使用它们。

- Undefined：唯一元素未定义的集合
- Null：唯一元素为 null 的集合
- Boolean：具有 false 和 true 两个元素的集合
- Number：所有数字的集合
- BigInt：所有任意精度整数的集合
- String：所有字符串的集合
- Symbol：所有符号的集合
- Object：所有对象的集合（包括函数和数组）

## TypeScript

TypeScript 为 JavaScript 带来了一个额外的层：静态类型（**Static**）。这些数据类型仅在**编译代码**或**检查源代码的数据类型**时存在。

💅 静态类型的检查的优点是：完全不需要运行源代码，

# 配置文件 tsconfig.json

该 json 文件告诉 `tsc`命令 如何进行转译。如果没有该文件，可以用以下命令自动生成`tsconfig.json`文件

```shell
tsc --init
```

# 如何使用 TS - 类型注释 & 类型推断

## 类型注释（Type Annotation）

语法`变量名:类型注释;`，举例：

```shell
let x: number;
```

## 类型推断（Type Inference）

除了用**类型注释**的方法**显性**定义数据类型。 TypeScript 也可以用**类型推断**猜测变量的数据类型。举例：TypeScript 推断 myNumber 是数字。

```shell
let myNumber = 123;
```

# 如何使用 TS - 变量 & 函数

## 变量

以下是 TS 的**静态类型**：

- 从 JS 转换来的**静态类型**：
  - undefined, null
  - boolean, number, string
  - symbol
  - object
- TS 自己的**静态类型**：

  - Array (并不是一个特定的 JS 的数据类型，JS 中，Array 可以是 List 或者 Tuple)

    - List：所有元素都是同样的数据类型，List 的长度不一定

      `let arr: number[] = [];`

      `let arr: Array<number> = [];`

    - Tuple：可包含不同类型的元素，Tuple 的长度固定

      `let point: [number, number] = [7, 5];`

  - any (所有类型都有效)

## 函数

举一个输入数字，输出字符串的例子：**函数类型**如下：

```ts
(num: number) => string;
```

接下来我们使用**类型注释**：

```ts
const myFunc: (num: number) => string = (my_num: number) => {
  String(my_num);
};
```

或者直接**类型推断**，即完全不用说明**函数类型**：

```js
const myFunc = (my_num: number) => {
  String(my_num);
};
```

# 更多链接 🔗

React + TypeScript Cheatsheets：https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
在线 TypeScript 平台：https://www.typescriptlang.org/play?#
