export default Sidebar;

const perfis = [
  {
    nome: "Luffy",
    imagem:
      "https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png",
    seguir: "Seguir",
    razao: "Novo no instagram",
  },
  {
    nome: "Law",
    imagem:
      "https://i.pinimg.com/564x/c6/e4/38/c6e4388d71fcb5b8a42bf51a6913ea87.jpg",
    seguir: "Seguir",
    razao: "Segue você",
  },
  {
    nome: "Shanks",
    imagem:
      "https://preview.redd.it/shanks-the-red-charismatic-figure-of-one-piece-is-hiding-a-v0-uumqo5hxu2qc1.jpeg?auto=webp&s=9bc54f77bc751e628d8dcfd6f5ccdcbaa7331fa2",
    seguir: "Seguir",
    razao: "Novo no instagram",
  },
  {
    nome: "Kaidou",
    imagem:
      "https://ovicio.com.br/wp-content/uploads/2022/01/20220109-kaido-poderes-e-tecnicas-do-kaido.jpeg",
    seguir: "Seguir",
    razao: "Segue você",
  },
  {
    nome: "Zoro",
    imagem:
      "https://vcfaz.tv/wp/wp-content/uploads/2025/03/Zoro-de-One-Piece-tem-um-dos-poderes.jpg",
    seguir: "Seguir",
    razao: "Segue você",
  },
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="usuario">
        <img
          src="https://pm1.aminoapps.com/7182/8dcbdef4307e039dadf7c0924793dc98e1d85d87r1-640-480v2_hq.jpg"
          alt="imagem de perfil"
        />
        <div className="texto">
          <span>
            <strong>catanacomics</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>
      <ul className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {perfis.map((conta, index) => (
          <Perfils
            nome={conta.nome}
            razao={conta.razao}
            imagem={conta.imagem}
            key={index}
            seguir={conta.seguir}
            nomeClass="nome"
          />
        ))}
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </ul>
    </div>
  );
}

function Perfils(props) {
  return (
    <li className="sugestao">
      <div className="usuario">
        <img src={props.imagem} />
        <div className="texto">
          <p className="nome">{props.nome}</p>
          <p className="razao">{props.razao}</p>
        </div>
      </div>
      <p className="seguir">{props.seguir}</p>
    </li>
  );
}
