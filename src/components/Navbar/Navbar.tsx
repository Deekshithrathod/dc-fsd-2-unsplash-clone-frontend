import { Modal } from "@mui/material";
import "./Navbar.css";
import { useState } from "react";
import AddPhotoModal from "../AddPhotoModal/AddPhotoModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav>
      <div className="logo-wrapper">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
        </div>
        <div className="search-box">
          <label htmlFor="search">
            <span className="material-symbols-outlined">search</span>
          </label>
          <input
            autoComplete="off"
            type="text"
            placeholder="Search by name"
            id="search"
          />
        </div>
      </div>
      <button className="btn" onClick={handleOpen}>
        Add a photo
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <AddPhotoModal handleClose={handleClose} />
      </Modal>
    </nav>
  );
};
export default Navbar;
