# Formik

Formik 用于解决 ReactJS 自带的 Controlled Component 和 Uncontrolled Component 各自的不足。

- 表单的输入，输出值
- 验证输入值，显示错误输入提醒
- 处理表单提交

# 安装

用 npm：

```shell
npm install formik --save
```

或者 yarn：

```shell
yarn add formik
```

# 使用
在`myform/src/formik-forms`文件夹中，我们循序渐进的写了一些例子：
- `SignupFormOne.jsx`: 单个input
- `SignupFormTwo.jsx`: 多个input，公用`useFormik()`的`handleChange()`方法即可
- `SignupFormThree.jsx`: 加入自定义的验证方法
- `SignupFormFour.jsx`: 确保在用户访问过之后，再显示错误提示信息
- `SignupFormFour.jsx`: 带`yup`

## 其他有帮助的工具

### `Yup` 输入格式验证
安装：
```shell
npm install yup --save
```

```shell
yarn add yup
```
