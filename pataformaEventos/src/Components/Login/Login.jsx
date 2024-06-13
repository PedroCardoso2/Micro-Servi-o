import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./Login.css";
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) =>  {
    event.preventDefault();

    const data = {
        login: login,
        senha: senha
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8185' 
      }
    };
  
    try {
      const response = await axios.post('http://localhost:8185/auth/login', data, config);
      console.log('Response:', response.data);
      navigate("/");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Endereço de e-mail *"
            style={{color: "black"}}
            required
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha *"
            style={{color: "black"}}
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar identificação
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Acessar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/register">Registrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
