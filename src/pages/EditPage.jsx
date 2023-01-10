import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Provider";

function EditPage() {
  const { getCourseToEdit, courseToEdit } = React.useContext(Context);

  const { id } = useParams();

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [address, setAddress] = React.useState("");

  const handleSubmit = () => {};

  React.useEffect(() => {
    getCourseToEdit(id);
  }, []);

  React.useEffect(() => {
    if (courseToEdit) {
      setName(courseToEdit.name);
      setDescription(courseToEdit.description);
      setPhoto(courseToEdit.photo);
      setAddress(courseToEdit.address);
    }
  }, [courseToEdit]);
  return (
    <div className="container">
      <h2>Изменить курс: </h2>
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
          Созранить изменения
        </button>
      </form>
    </div>
  );
}

export default EditPage;
