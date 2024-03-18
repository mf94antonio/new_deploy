import { useParams, useNavigate } from "react-router-dom"

export const ContactDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleContact = () => {
    console.log("contact enviado!");
    return navigate("/");
  };

  return (
    <div>
        <h1>Exibindo informação do contact: {id}</h1>
        <button onClick={handleContact}>Enviar mensagem </button>
    </div>
  )
}
