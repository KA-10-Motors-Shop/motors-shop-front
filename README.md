<h1 align="center">
  Motors Shop
</h1>
<h3 align="center">Projeto de um E-commerce voltando para veículos com compra, venda e leilões.</h3>
<br/>
<p>
O objetivo desse Frontend é criar uma UI responsiva, mobile first, para o CRUD do backend da aplicação.
</p>  

<br/>

## **Tecnologias e bibliotecas utilizadas no FrontEnd:**
- React.js
- Typescript
- Axios
- JWT
- Hooks e yup
- Toastify
- Styled-components
- Swiper
- Jest
  
<br/>

## **Tecnologias e bibliotecas utilizadas no Backend:**
- Node.js
- Express.js
- Typescript
- Prima
- JWT
- Swagger
- Bcrypt.js
- Cors
- Dotenv
- Body-parser
- uuid
- Nodemon
  
<br/>


O url base da API é https://motors-shop-front-pi.vercel.app/.

<br/>

## **Funcionalidades encontradas na aplicação Frontend:**

### Página Home
- No Header, atualmente, está funcional o botão de login, onde será redirecionado para a página de login e poderá acessar novas funcionalidades da aplicação.
- No corpo da página, haverá uma primeira sessão com 3 botões (leilão, carros, motos) onde ao clicar, será rapidamente encaminhado para a sessão correspondente.
- Abaixo dessa sessão, há o carrossel do leilão, unicamente visual.
- E, após isso, os carrosséis de venda (carros e motos) onde ao clicar em qualquer produto, irá ser redirecionado para a página do mesmo.

<br/>
  
### Página Login
- Nessa página, poderá fazer login usando email e senha. 
- Há também o botão de cadastro e de esquecimento da senha, mas não estão funcionais.
  
<br/>

### Página Product/:id
-  Ma primeira sessão da página, haverá a imagem do produto com título, quilometragem e preço. Além de um botão de compra, que não está funcional. Bem com uma descrição do mesmo, construída pelo criador do anúncio.
-  Também na página há comentários de usuários acerca do produto e uma sessão de criação de novos comentários. Não funcionais.
-  Na lateral, pode-se encontrar uma sessão com outras fotos do produto e um botão para ver todos os anúncios, que retornará à página Home, mas não está atualmente funcional.

<br/>

### Página ProfileViewAdmin
-  Na primeira sessão da página haverá um bloco trazendo nome, o tipo de perfil do usuário e a descrição criada pelo mesmo. Também nesse bloco, encontra-se o botão de criar anúncio.
-  Ao clicar no botão "Criar anúncio", abrirá um modal solicitando as informações necessárias para a criação de um anúncio, seja de leilão seja de venda. Nele também deverá descrever se o veículo corresponde a moto ou carro, bem como inserir urls de imagem. O máximo de imagens que podem ser adicionadas são 5.
-  Na parte inferior desse bloco, ficarão os anúncios do usuário logado.

<br/>

<hr/>

Para rodar a aplicação, é necessário:
- yarn add (para baixar as estruturas necessárias da aplicação, contida no package.json)
- yarn start (para rodar a aplicação)
- yarn test (para rodar os testes)

