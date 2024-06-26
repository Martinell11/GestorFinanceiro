
import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';

const Cadastro = () => {
    const [mostarLogin, setLogin] = useState(false)
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = async (event) => {
        try {
            await axios.post('http://localhost:5002/cadastro', { nome, email, senha });
            alert('Cadastro realizado com sucesso!');
            setNome('');
            setEmail('');
            setSenha('');

        } catch (error) {
            console.error('Erro ao cadastrar usuário:',error.response.data.error);
            alert(error.response.data.error);
        }
    };
    
    const toogleLogin = () => {
        setLogin(!mostarLogin)
        window.location.reload()
    }
    
    return (
        <div className="container">
            {!mostarLogin && (
            <form className="form" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>
                <div className="login"><input type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} required /></div>
                <div className="login"><input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required /></div>
                <div className="login"><input type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange} required /></div>
                <div className="login"><button type="submit">Cadastrar</button></div>
                <p onClick={toogleLogin}>Já tem Cadastro? <span>clique aqui</span></p>
            </form>
            )}
            {mostarLogin && <Login/>}
        </div>
    );
};

export default Cadastro;
