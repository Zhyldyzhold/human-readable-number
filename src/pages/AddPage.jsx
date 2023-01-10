import React from "react";
import { Context } from "../context/Provider";

function AddPage() {
  const { sendCourse } = React.useContext(Context);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = () => {
    const newCourse = {
      name,
      description,
      photo,
      address,
    };

    for (let i in newCourse) {
      if (!newCourse[i].trim()) {
        alert("try again, please");
        return;
      }
    }
    sendCourse(newCourse);
    setName("");
    setDescription("");
    setPhoto("");
    setAddress("");
  };

  return (
    <div className="add-page container">
      <h2>Добавить курс: </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Введите название"
          className="form-control"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Введите описание"
          className="form-control"
        />

        <input
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          type="text"
          placeholder="Введите ссылку на фото курса"
          className="form-control"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Введите адрес"
          className="form-control"
        />
        <button type="submit" className="btn btn-primary">
          Добавить курс
        </button>
      </form>
    </div>
  );
}

export default AddPage;
