import { useFormik } from "formik";

function SignupFormTwo() {
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

      {/* lastname */}
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      {/* firstname */}
      <label htmlFor="firstName">Last name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      {/* button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupFormTwo;
