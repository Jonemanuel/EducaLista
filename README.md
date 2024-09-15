<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EducaLista - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2, h3 {
            color: #0033A0;
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 10px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        a {
            color: #0033A0;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .section {
            margin-bottom: 20px;
        }
        .screenshots img {
            width: 45%;
            display: inline-block;
            vertical-align: top;
        }
        .screenshots {
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>EducaLista</h1>
        <p><strong>EducaLista</strong> é um aplicativo desenvolvido em React Native para gerenciar a presença escolar e contatos dos pais. Através de uma interface amigável, você pode registrar a presença dos alunos e gerenciar uma lista de contatos dos pais.</p>
        
        <div class="section">
            <h2>Descrição</h2>
            <p>EducaLista é uma solução intuitiva para escolas e professores. Permite o registro de presença dos alunos e o gerenciamento de contatos dos pais com eficiência e facilidade. Utiliza AsyncStorage para armazenamento local.</p>
        </div>

        <div class="section">
            <h2>Funcionalidades</h2>
            <ul>
                <li><strong>Marcar Presença:</strong> Registre a presença dos alunos com data e nome.</li>
                <li><strong>Gerenciar Contatos:</strong> Adicione, edite e exclua contatos dos pais.</li>
                <li><strong>Visualizar Presença:</strong> Filtre a lista de alunos por data para verificar a presença em dias específicos.</li>
                <li><strong>Interface Intuitiva:</strong> Design clean e fácil de usar.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Capturas de Tela</h2>
            <div class="screenshots">
                <h3>Tela Inicial</h3>
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/TelaInicial1.jpg" alt="Tela Inicial 1">
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/TelaInicial2.jpg" alt="Tela Inicial 2">
                
                <h3>Tela de Presença</h3>
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Home1.jpg" alt="Tela de Presença 1">
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Home2.jpg" alt="Tela de Presença 2">
                
                <h3>Tela de Notas</h3>
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Nota1.jpg" alt="Tela de Notas 1">
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Notaa2.jpg" alt="Tela de Notas 2">
                
                <h3>Tela de Lista Telefônica</h3>
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Contato1.jpg" alt="Tela de Lista Telefônica 1">
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Contato2.jpg" alt="Tela de Lista Telefônica 2">
                
                <h3>Tela de Detalhes do Desenvolvedor</h3>
                <img src="https://github.com/Jonemanuel/EducaLista/blob/main/assets/readme/Desenvolvedor.jpg" alt="Tela de Detalhes do Desenvolvedor">
            </div>
        </div>

        <div class="section">
            <h2>Tecnologias Utilizadas</h2>
            <ul>
                <li><strong>React Native:</strong> Framework para desenvolvimento cross-platform.</li>
                <li><strong>Expo:</strong> Ferramenta para facilitar o desenvolvimento e build de aplicativos React Native.</li>
                <li><strong>AsyncStorage:</strong> Armazenamento local para persistência de dados.</li>
                <li><strong>Styled Components:</strong> Biblioteca para estilização de componentes.</li>
                <li><strong>React Navigation:</strong> Biblioteca para navegação entre telas no React Native.</li>
                <li><strong>DatePicker:</strong> Componente para seleção de datas.</li>
                <li><strong>React Native Paper:</strong> Biblioteca de componentes UI baseados em Material Design.</li>
                <li><strong>React Hook Form:</strong> Biblioteca para gerenciamento de formulários e validação.</li>
                <li><strong>Jest:</strong> Framework para testes unitários e de integração.</li>
                <li><strong>Prettier:</strong> Ferramenta para formatação automática de código.</li>
                <li><strong>ESLint:</strong> Ferramenta para análise estática e linting de código.</li>
            </ul>
        </div>

        <div class="section">
            <h2>Instalação</h2>
            <p>Para rodar o projeto localmente, siga estes passos:</p>
            <ol>
                <li><strong>Clone o repositório:</strong>
                    <pre><code>git clone https://github.com/seuusuario/educalista.git</code></pre>
                </li>
                <li><strong>Navegue até o diretório do projeto:</strong>
                    <pre><code>cd educalista</code></pre>
                </li>
                <li><strong>Instale as dependências:</strong>
                    <pre><code>npm install</code></pre>
                </li>
                <li><strong>Inicie o aplicativo:</strong>
                    <pre><code>npm start</code></pre>
                    <p>Use o Expo Go no seu dispositivo ou um emulador para visualizar o aplicativo.</p>
                </li>
            </ol>
        </div>

        <div class="section">
            <h2>Uso</h2>
            <ol>
                <li><strong>Iniciar o Aplicativo:</strong> Após iniciar o aplicativo, você verá a tela inicial com opções para marcar presença, acessar a lista telefônica e visualizar as notas dos alunos.</li>
                <li><strong>Adicionar Presença:</strong> Navegue para a seção de presença e registre a presença dos alunos.</li>
                <li><strong>Gerenciar Contatos:</strong> Acesse a lista telefônica para adicionar ou editar contatos dos pais.</li>
                <li><strong>Visualizar Presença:</strong> Use o filtro de data para visualizar a presença dos alunos em dias específicos.</li>
            </ol>
        </div>

        <div class="section">
            <h2>Contribuição</h2>
            <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias.</p>
        </div>

        <div class="section">
            <h2>Contato</h2>
            <p>Para mais informações, entre em contato com Jonatas Emanuel em <a href="mailto:jonatasemanuel276@gmail.com">jonatasemanuel276@gmail.com</a>.</p>
        </div>
    </div>
</body>
</html>
