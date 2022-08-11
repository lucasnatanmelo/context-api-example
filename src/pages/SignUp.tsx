import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

export const SignUp = () => {
  const { state, dispatch } = useContext(Context);
  const [nameInput, setNameInput] = useState(state.user.name);
  const [ageInput, setAgeInput] = useState(state.user.age);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameInput(e.target.value);
  }

  function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    // setAgeInput(parseInt(e.target.value));
    setAgeInput(parseInt(e.target.value));
  }

  function handleSave() {
    dispatch({
      type: "CHANGE_NAME",
      payload: {
        name: nameInput,
      },
    });
    dispatch({
      type: "CHANGE_AGE",
      payload: {
        age: ageInput,
      },
    });
  }

  return (
    <div>
      <h3>Tela SignUp (Tema: {state.theme.status})</h3>
      <br />
      <input
        type="text"
        placeholder="Digite um nome"
        value={nameInput}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Digite um idade"
        value={ageInput}
        onChange={handleAgeChange}
      />
      <button onClick={handleSave}>Salvar</button>
      <Link to="/exibir">Ir para o ShowData</Link>
    </div>
  );
};
