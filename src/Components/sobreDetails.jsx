import { useParams, useNavigate } from "react-router-dom"


export const SobreDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSobre = () => {
    console.log("Sobre enviado!");
    return navigate("/");
  };

  return (
    <div>
        <h1>Exibindo informação do Sobre: {id}</h1>
        <button onClick={handleSobre}>Enviar mensagem </button>
    </div>
  )
}
