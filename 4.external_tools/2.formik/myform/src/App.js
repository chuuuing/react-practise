import logo from "./logo.svg";
import "./App.css";
import FormikForm from "./formik-forms/FormikForm";
import SignupFormOne from "./formik-forms/SignupFromOne";
import SignupFormTwo from "./formik-forms/SignupFormTwo";
import SignupFormThree from "./formik-forms/SignupFormThree";

function App() {
  return (
    <div className="App">
      <h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </h1>
      <h2>FormikForm</h2>
      <FormikForm />
      <h2>SignupFormOne</h2>
      <SignupFormOne />
      <h2>SignupFormTwo</h2>
      <SignupFormTwo />
      
      <h2>SignupFormThree</h2>
      <SignupFormThree />
    </div>
  );
}

export default App;
