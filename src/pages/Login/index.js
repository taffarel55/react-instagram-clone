import Button from "../../components/Button";
import CardBox from "../../components/CardBox";
import InputField from "../../components/InputField";
import { FacebookLogo, Logo } from "../../images/Sprites";
import appleStore from "../../images/Stores/appleStore.png";
import googlePlay from "../../images/Stores/googlePlay.png";
import "./index.css";

function Login() {
  return (
    <div className="Login center">
      <CardBox>
        <Logo />
        <form className="form">
          <InputField
            placeholder="Telefone, nome de usuário ou email"
            type="text"
          />
          <InputField placeholder="Senha" type="password" />
          <Button caption="Entrar" />
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
      <div className="get-app">Obtenha o aplicativo</div>
      <div className="get-app__imgs">
        <img src={appleStore} alt="GooglePlay" />
        <img src={googlePlay} alt="AppStore" />
      </div>
    </div>
  );
}

export default Login;
