import "./SuccessModal.css";

function SuccessModal({ closeModal }) {
  // closeModal in the props of current component, equals to the setModalStatus() function
  // in the parent component
  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              X
            </button>
          </div>

          <div className="title">
            <h1>great job! sure you want to close this?</h1>
          </div>
          <div className="body">
            <p>the next page is awesome! You should defintely move forward!</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                closeModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccessModal;
