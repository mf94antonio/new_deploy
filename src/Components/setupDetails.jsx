import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom";


export const SetupDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSetup = () => {
    console.log("Sobre enviado!");
    return navigate("/");
  };

  return (
    <div>
        <h1>Exibindo informação do Setup: {id}</h1>
        <button onClick={handleSetup}>Enviar mensagem </button>
        
    </div>
  )
}
