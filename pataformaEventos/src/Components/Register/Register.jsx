import { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import "./Register.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateN, setDateN] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nome: username,
      email,
      senha: password,
      date: dateN,
      role: "USER",
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8185' 
      }
    };
  
    try {
      const response = await axios.post('http://localhost:8185/auth/register', data, config);
      console.log('Response:', response.data);
      navigate("/");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome de usuário *"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="Endereço de e-mail *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-field">
          <input
            type="date"
            placeholder="Data Nascimento"
            required
            value={dateN}
            onChange={(e) => setDateN(e.target.value)}
          />
          <BsCalendarDate className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha *"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />         
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme a senha *"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="buttonRegister">Registrar</button>
        <div className="login-link">
          <p style={{"marginTop": '10px'}}>
            Já tem uma conta? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
