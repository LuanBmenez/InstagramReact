export default Story;

const perfis = [
 {
      nome: "Luffy",
      imagem:"https://img.assinaja.com/upl/lojas/mundosinfinitos/imagens/foto-one-piece.png"
    },
     {
      nome: "Law",
      imagem:
        "https://i.pinimg.com/564x/c6/e4/38/c6e4388d71fcb5b8a42bf51a6913ea87.jpg",
    },
     {
      nome: "Shanks",
      imagem:
        "https://preview.redd.it/shanks-the-red-charismatic-figure-of-one-piece-is-hiding-a-v0-uumqo5hxu2qc1.jpeg?auto=webp&s=9bc54f77bc751e628d8dcfd6f5ccdcbaa7331fa2",
    },
     {
      nome: "Kaidou",
      imagem:
        "https://ovicio.com.br/wp-content/uploads/2022/01/20220109-kaido-poderes-e-tecnicas-do-kaido.jpeg",
    },
     {
      nome: "Zoro",
      imagem:
        "https://vcfaz.tv/wp/wp-content/uploads/2025/03/Zoro-de-One-Piece-tem-um-dos-poderes.jpg",
    },
      {
      nome: "Garp",
      imagem:
        "https://cdn.selectgame.net/wp-content/uploads/2023/07/Garp-em-One-Piece-Imagem-perfil.jpg",
    },
      {
      nome: "Robin",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWD-U2fegyr8LpP5quYYebkP5sTDjh4SeNw&s",
    },
      {
      nome: "Kuma",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLGFXLBTzQ7rTpTar_L7IRGYTPHDBbZSnBA&s",
    },
    {
      nome: "Big Mom",
      imagem:
        "https://i.ytimg.com/vi/3DS5N9XG3zc/maxresdefault.jpg",
    },

]

function Story() {


return (
  
    <div className="esquerda">
    <ul className="stories">
      {perfis.map((conta, index) => (
        <Perfils nome={conta.nome} imagem={conta.imagem} key={index}   imagemClass="imagem"
          nomeClass="story"/>
      ))}
    </ul>
    </div>
 
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