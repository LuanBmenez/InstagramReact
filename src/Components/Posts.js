import { useState } from "react";
import { perfisPost } from "./db";

function Posts() {
  return (
    <ul className="posts">
      {perfisPost.map((conta, index) => (
        <PostIndividual
          key={index}
          nome={conta.nome}
          perfil={conta.perfil}
          foto={conta.foto}
          curtidoporimg={conta.curtidoporimg}
          curtidas={conta.curtidas}
          curtidopor={conta.curtidopor}
        />
      ))}
    </ul>
  );
}

function PostIndividual({
  perfil,
  nome,
  foto,
  curtidoporimg,
  curtidopor,
  curtidas,
}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(curtidas);
  const [save, setSave] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };
  const toggleSave = () => {
    setSave(!save);
  };

  return (
    <li className="post">
      <div className="topo">
        <div className="usuario">
          <img src={perfil} />
          <p>{nome}</p>
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="conteudo">
        <img onClick={toggleLike}src={foto} />
      </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={liked ? "heart" : "heart-outline"}
              className={liked ? "liked" : ""}
              onClick={toggleLike}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={save ? "bookmark" : "bookmark-outline"}
              className={save ? "saved" : ""}
              onClick={toggleSave}
              style={{ cursor: "pointer" }}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={curtidoporimg} />
          <div class="texto">
            Curtido por <strong>{curtidopor}</strong> e
            <strong> outras {likeCount.toLocaleString("pt-BR")} pessoas</strong>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Posts;
