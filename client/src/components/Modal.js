const Modal = () => {
  const mode = "edit";

  const handleChange = () => {
    console.log("changing!");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} you task</h3>
          <button>X</button>
        </div>
        <form>
          <input
            type="text"
            maxLength={30}
            placeholder=" Your task goes here"
            name="title"
            value={""}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
            required
          />
          <input type="submit" value="" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
