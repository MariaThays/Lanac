<h1 align="center"> Projeto Final {Reprograma} - Lanac (Lar Nazareno da Criança)</h1>

<h1 align="center">
<img src="public/images/crianca.gif" alt="Menino de braços abertos" width="500" height="500" /> 
</h1>
<br>


## Introdução

Esse projeto foi desenvolvido como etapa de conclusão do curso Backend da {Reprograma}.
É inspirado no Lar Nazareno da criança (Lanac), uma ONG que atende crianças de forma gratuita, com aula de reforço e creche em tempo integral. Localizada na cidade de Paulista- Pernambuco, na qual sou voluntária. 
Todos os anos, no mês de dezembro, a Lanac faz um projeto de apadrinhamento para doações de roupas e brinquedos.

## Objetivo

O Objetivo deste projeto é cadastrar pessoas que tenham o desejo de apadrinhar as crianças da comunidade,que vivem em situação de vunerabilidade.

Acesse a aplicação  [aqui](https://associacao-vidas-do-amanha.herokuapp.com/)  |
Acesse a documentação [aqui](https://associacao-vidas-do-amanha.herokuapp.com/minha-rota-de-documentacao/)



##  Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm `| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|


## Arquitetura da API
 
  📁Lanac
├── 📁node_modules
├── 📁src
│   ├── 📁controller
        ├── 📄criancasController.js
|       ├── 📄padrinhosController.js
|   ├── 📁database
|       ├── 📄dbConnect.js
    ├── 📁models
|       ├── 📄criancasModel.js
|       ├── 📄padrinhosModel.js
│   ├── 📁routes
│       ├── 📄criancaRoutes.js
        ├── 📄padrinhoRoutes.js
|   ├── app.js
├── 📁swagger
|   ├── 📄swagger_output.json
├── 📄.env
├── 📄.env.example 
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
├── 📄README.md
├── 📄server.js
├── 📄swagger.js

#### Instalação

bash
# Clonar o repositório
$ git clone https://github.com/MariaThays/Lanac.gitProjeto-Livre-FlagFeminino
# Entrar na pasta do repositório
$ cd Lanac
# Instalar as dependências
$ npm install
# Executar o servidor
$ npm start

 
## Funcionalidades

* O schema de crianças na API deve conter name, age, clothesSize, shoe e gender;
* O schema de padrinhos na API deve conter name, cpf, telephoneOrWhatsapp, adress, email e gender;
* A API deve permitir o cadastro de crianças ;
* A API deve permitir o cadastro de padrinhos;
* A API deve listar crianças cadastradas;
* A API deve listar padrinhos cadastros;
* A API deve retornar criança por id;
* A API deve retornar padrinho por id; 
* A API deve permitir modificação em  criança;
* A API deve permitir modificação em  padrinho;
* A API deve permitir deletar cadastro de criança;
* A API deve permitir deletar cadastro de  padrinho;

## Exemplo de estrutura de cadastro de criança :
yaml
{
  "name": "Matheus Henrique", 
  "age": 6,
  "clothesSize": "Blusa m, short G",
  "shoe": 33,
  "gender": "masculino"
}

 
## Exemplo de estrutura de cadastro de padrinho :

yaml
{
    "name": " Naralia Cardoso",
    "cpf": 109392920202022,
    "telephoneOrWhatsapp": 81983429530,
    "adress": "Av.Marcos Freire, 5455",
    "email": "ntlcardoso@gmail.com",
    "gender": "feminino"
}


## Rotas e Endpoints


Rotas de crianças

 verbo |   rota       | função
-----------------------------------------------------
get   | /crianca     |listar todas as crianças
get   | /crianca/:id | retornar criança por id
post  | /crianca     | cadastrar criança
patch |/crianca/:id  | Atualizar por id
delete| /crianca/:id |Deletar cadastro de criança por id


Rotas de padrinho

verbo |   rota       | função
-----------------------------------------------------
get   | /padrinho    | listar todos os padrinhos
get   | /padrinho/:id| retornar padrinho por id
post  | /padrinho    | cadastrar padrinho
put   |/padrinho/:id | Atualizar cadastro de padrinho
delete| /padrinho/:id| DEletar cadastro de padrinho por id
```

## Contribua com esse projeto

Faça o fork do projeto;
Crie uma branch para realizar suas alterações: git checkout -b feature/nome-da-nova-branch
Commit as alterações feitas e abra um pull request

## Agradecimentos

 Gratidão a todos que fazem a {reprograma} acontecer, vocês passaram pela minha vida e me transformaram. A todas as mulheres incríveis da on19 que eu tive a SORTE de conhecer, vocês foram fundamentais nessa caminhada. Grata a todas as professoras por tanto empenho e paciência, vocês são incríveis. Em especial a minha amiga Shirlene por todo apoio durante todo o curso, sem você eu não conseguiria.
 A minha família, amigos e todos que fizeram parte da construção desse sonho.

## 🌻 Desenvolvedora


</br>

<p align="center">

</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/maria-thays-bb1902152/ target="_blank"><img src="https://img.shields.io/badge/-Ana_Lidia-blue?style=flat-square&logo=Linkedin&logoColor=white&link=hhttps://www.linkedin.com/in/maria-thays-bb1902152/" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>
