import { useFormik } from "formik";

function SignupFormOne() {
  // Hook: useFormik
  // includes: (1) initial value (2) submission function
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // 使用formik也就是useFormik()即可
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupFormOne;
