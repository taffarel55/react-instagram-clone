import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { CardBox, CardBoxStore } from "../../components/CardBox";
import InputField from "../../components/InputField";
import { FacebookLogo, Logo } from "../../images/Sprites";
import appleStore from "../../images/Stores/appleStore.png";
import googlePlay from "../../images/Stores/googlePlay.png";
import "./index.css";

// TODO: Colocar links aqui
const links = [
  "Meta",
  "Sobre",
  "Blog",
  "Carreiras",
  "Ajuda",
  "API",
  "Privacidade",
  "Termos",
  "Principais contas",
  "Hashtags",
  "Localizações",
  "Instagram Lite",
];

const topics = [
  "Beleza",
  "Dança",
  "Fitness",
  "Comida e bebida",
  "Casa e jardim",
  "Música",
  "Artes visuais",
];

function Login() {
  const [formLogin, setFormLogin] = useState({});
  const [buttonState, setButtonState] = useState(false);

  useEffect(() => {
    if (formLogin.user && formLogin.password?.length >= 6) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  }, [formLogin]);

  const handleChange = ({ target }) => {
    setFormLogin({ ...formLogin, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buttonState) return;

    // BUG: Resolver limpeza do formulario
    setFormLogin({});
    console.log(formLogin);
  };

  return (
    <div className="Login">
      <div className="Login-main">
        <div className="login-left">
          <div className="login-background">
            <div className="image-slider"></div>
          </div>
        </div>
        <div className="login-card">
          <CardBox>
            <Logo />
            <form
              className="form"
              onChange={handleChange}
              onSubmit={handleSubmit}
            >
              <InputField
                placeholder="Telefone, nome de usuário ou email"
                type="text"
                name="user"
                value={formLogin.user}
              />
              <InputField
                placeholder="Senha"
                type="password"
                name="password"
                value={formLogin.password}
              />
              <Button caption="Entrar" state={buttonState} />
              <div className="form-div">OU</div>
              <div className="facebook-button">
                <FacebookLogo />
                <div className="facebook-text">Entrar com o Facebook</div>
              </div>
              <a href="forget" className="forget">
                Esqueceu a senha?
              </a>
            </form>
          </CardBox>
          <CardBox>
            <div className="sign-up__box">
              Não tem uma conta? <a href="signup">Cadastre-se</a>
            </div>
          </CardBox>
          <CardBoxStore>
            <div className="get-app">Obtenha o aplicativo</div>
            <div className="get-app__imgs">
              <img src={appleStore} alt="GooglePlay" />
              <img src={googlePlay} alt="AppStore" />
            </div>
          </CardBoxStore>
        </div>
      </div>
      <div className="Login-footer">
        <div className="items-footer">
          {links.map((item) => (
            <a key={item} href={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="items-footer">
          {topics.map((item) => (
            <a key={item} href={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="language-footer">
          <p>Português (Brasil)</p>
          {/* TODO: Fazer Dropdown */}
          <p> © 2022 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
