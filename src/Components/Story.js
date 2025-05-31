import { perfis } from "./db";


function Story() {
  return (
    <ul className="stories">
      {perfis.map((conta, index) => (
        <Perfils
        nome={conta.nome}
        imagem={conta.imagem}
        key={index}
        imagemClass="imagem"
        nomeClass="story"
        />
      ))}
    </ul>
  );
}
function Perfils(props) {
  return (
    <li className="story">
      <div className="imagem">
        <img src={props.imagem} />
      </div>
      <p className="nome-story">{props.nome}</p>
    </li>
  );
}

export default Story;