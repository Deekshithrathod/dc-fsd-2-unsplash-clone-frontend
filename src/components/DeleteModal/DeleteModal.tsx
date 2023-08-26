import "./DeleteModal.css";
import "../CustomModal/CustomModal.css";

const DeleteModal = () => {
  return (
    <div className="modal-card">
      <h2>Are you sure?</h2>
      <label htmlFor="password">
        Password
        <input type="password" placeholder="******************" id="password" />
      </label>
      <div className="buttons-box">
        <button>Cancel</button>
        <button style={{ backgroundColor: "#EB5757" }}>Submit</button>
      </div>
    </div>
  );
};
export default DeleteModal;
