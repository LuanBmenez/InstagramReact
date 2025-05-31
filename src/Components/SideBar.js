import { useState } from "react";
import React from "react";
import { perfisSugeridos } from "./db";

const imagemInicial =
  "https://wallpapers.com/images/hd/smiling-bloody-trafalgar-law-one-piece-fanart-44bsvjb9q10npjlr.jpg";

function Sidebar() {
  const [nome, setNome] = React.useState("");
  function InserirNome() {
    const nomeDigitado = prompt("Qual o seu nome?");
    setNome(nomeDigitado);
  }
  const [avatar, setAvatar] = React.useState(imagemInicial);
  function mudaAvatar() {
    const linkAvatar = prompt("Insira o Url da Imagem");
    setAvatar(linkAvatar ? linkAvatar : imagemInicial);
  }

  return (
    <div className="sidebar">
      <div className="usuario">
        <img onClick={mudaAvatar} src={avatar} alt="avatar" />
        <div className="texto">
          <span>
            <strong>{!nome ? "tokin" : nome}</strong>
            <ion-icon onClick={InserirNome} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
      <ul className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {perfisSugeridos.map((conta, index) => (
          <Perfils
            key={index}
            nome={conta.nome}
            razao={conta.razao}
            imagem={conta.imagem}
            seguir={conta.seguir}
          />
        ))}
        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </ul>
    </div>
  );
}

function Perfils(props) {
  const [follow, setFollow] = useState(false);

  const toggleFollow = () => {
    setFollow(!follow);
  };

  return (
    <li className="sugestao">
      <div className="usuario">
        <img src={props.imagem} alt={`Perfil de ${props.nome}`} />
        <div className="texto">
          <p className="nome">{props.nome}</p>
          <p className="razao">{props.razao}</p>
        </div>
      </div>
      <p
        className="seguir"
        onClick={toggleFollow}
        style={{ cursor: "pointer", color: follow ? "black" : "blue" }}
      >
        {follow ? "Seguiu" : props.seguir}
      </p>
    </li>
  );
}

export default Sidebar;
