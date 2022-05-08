// 其实html有自己本身的验证功能：
// 比如`required`属性，和`maxlength`,`minlength`，甚至还有`pattern`。
// 但是这些验证不能提供一个用户友好的反馈，
// Formik可以提供更强大的**验证功能**和**错误信息反馈**

import { useFormik } from "formik";

// 自定义输入验证 & 报错方法
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

// 表单
function SignupFormThree() {
  // Hook: useFormik
  // includes: (1) initial value (2) submission function
  const formik = useFormik({
    initialValues: {
      email: "",
      lastName: "",
      firstName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

    // 上面新建的validate()方法，放到useFormik的hook里面
    validate,
  });

  // 使用formik也就是useFormik()即可
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* email */}
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {/* 添加错误信息 */}
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      {/* lastname */}
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {/* 添加错误信息 */}
      {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      {/* firstname */}
      <label htmlFor="firstName">Last name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {/* 添加错误信息 */}
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      {/* button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupFormThree;
