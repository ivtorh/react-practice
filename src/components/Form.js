import { useState } from "react";

function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        console.log(`Usuário: ${name}\nSenha: ${password}`)
        console.log('Usuário Cadastrado!');
    }

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                    type="password" 
                    id="senha" 
                    name="senha" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    );
}

export default Form;