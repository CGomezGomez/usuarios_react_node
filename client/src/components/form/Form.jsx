import Print from "../print/Print";

import { StyledForm } from "./styles";

const createUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:3000/api/users/create", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al crear usuario:", error);
  }
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const title = event.target.title.value;
  const name = event.target.name.value;
  const age = event.target.age.value;
  const username = event.target.username.value;
  const email = event.target.email.value;

  const userData = {
    title,
    name,
    age,
    username,
    email,
  };

  await createUser(userData);
};

const Form = () => {

  return (
    <div>
       <StyledForm onSubmit={handleFormSubmit}>
      <label>Título:</label>
      <input type="text" name="title" />
      <br />

      <label>Nombre:</label>
      <input type="text"  name="name" />
      <br />

      <label>Edad:</label>
      <input type="number"  name="age" />
      <br />

      <label>Nombre de usuario:</label>
      <input type="text"  name="username" />
      <br />

      <label>Email:</label>
      <input type="email"  name="email" />
      <br />

      <button type="submit">
        Crear Usuario
      </button>
    </StyledForm>
    <Print />
    </div>
   
  );
};

export default Form;