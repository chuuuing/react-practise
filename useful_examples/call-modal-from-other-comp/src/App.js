import logo from "./logo.svg";
import "./App.css";
import SuccessModal from "./components/SuccessModal";
import BootstrapModal from "./components/BootstrapModal";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const [bsModalStatus, setBSModalStatus] = useState(false);

  return (
    <>
      <div className="App">
        {/* 第一种： NATIVE button and modals */}
        <h1>NATIV: click on the button to open the modal.</h1>

        <button
          className="openModalBtn"
          onClick={() => {
            setModalStatus(true);
          }}
        >
          Open 🧙‍♀️ world
        </button>

        {modalStatus && <SuccessModal closeModal={setModalStatus} />}
        <hr />
        <hr />

        {/* 第二种： Button and Modal from BOOTSTRAP */}
        <h1>BOOTSTRAP: click on the button to open the modal.</h1>
        <Button
          variant="primary"
          onClick={() => {
            setBSModalStatus(true);
          }}
        >
          Open BOOTSTRAP 👢 world
        </Button>
        <BootstrapModal
          show={bsModalStatus}
          onHide={() => {
            setBSModalStatus(false);
          }}
        />
      </div>
    </>
  );
}

export default App;
