import axios from "axios";
import { useState } from "react";

const AddItem = ({ pageValue, setRefresh, show, setShow }) => {
  const [showAddItem, setShowAddItem] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post(
      "http://localhost:3002/new-entry",
      formData
    );
    setRefresh((prev) => !prev);
    console.log(response);
    e.target.reset();
  };

  return (
    <div className={`form-container ${show ? "visible" : "hidden"}`}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Room" name="room" />
        <textarea type="text" placeholder="content" name="content" />
        <input
          type="text"
          placeholder="category"
          name="category"
          value={pageValue}
        />
        <input type="file" placeholder="image" name="image" />
        <button type="submit">Submit</button>
        <button onClick={() => setShow(!show)}>Close window</button>
      </form>
    </div>
  );
};

export default AddItem;
