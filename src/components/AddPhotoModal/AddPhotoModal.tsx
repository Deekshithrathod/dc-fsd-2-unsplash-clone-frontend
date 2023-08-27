import "./AddPhotoModal.css";

const AddPhotoModal = ({ handleClose }: { handleClose: Function }) => {
  return (
    <div className="modal-card">
      <h2>Add a new Photo</h2>
      <label htmlFor="label">
        Label
        <input type="text" placeholder="Suspendisse elit massa" id="label" />
      </label>
      <label htmlFor="photoURL">
        Photo URL
        <input
          type="text"
          placeholder="https://example.url.com/photo/ahHdsf12K"
          id="photoURL"
        />
      </label>
      <div className="buttons-box">
        <button onClick={() => handleClose()}>Cancel</button>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
};
export default AddPhotoModal;
