import { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../contexts/Context";

export const ShowData = () => {
  const { state, dispatch } = useContext(Context);

  return (
    <div>
      <h3>Tela ShowData</h3>

      {state.user.name && (
        <>
          MEU NOME É: {state.user.name}
          <br />
          TENHO {state.user.age} anos
          <br />
        </>
      )}
      {!state.user.name && <>Não há informações</>}
      <br />
      <Link to="/">Voltar para o SignUp</Link>
    </div>
  );
};
