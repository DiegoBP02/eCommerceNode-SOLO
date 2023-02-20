Projeto que simula o backend de um e-commerce.

Possui um sistema de login/registro que permite o usuário acessar as funcionalides do projeto, o usuário também pode se deslogar. Caso o login tenha sido realizado, o usuário consegue:

## User
#### Funções disponíveis para o usuário logado:
- Mostrar o usuário atual (show current user)
- Acessar um usuário específico (get single user)
- Atualizar o usuário (update user)
- Atualizar a senha do usuário (update user password)

#### Funções disponíveis apenas para os usuários autenticados como admin:
- Obter todos os usuários (get all users)

## Product
#### Funções disponíveis para o usuário logado:

- Obter um produto específico (get single product)
- Obter todos os produtos (get all products)
- Obter todas as reviews de um produto (get single product reviews)

#### Funções disponíveis apenas para os usuários autenticados como admin:

- Criar um produto (create product)
- Atualizar um produto (update product)
- Deletar um produtor (delete product)
- Adicionar uma imagem para o produto (upload image)

## Review
#### Funções disponíveis para o usuário logado:
- Obter todas as avaliações (get all reviews)
- Criar uma avaliação (create review)
- Obter uma avaliação específica (get single review)
-  Atualizar uma avaliação (update review)
- Deletar uma avaliação (delete review)

## Order
#### Funções disponíveis para o usuário logado:
- Criar um pedido (create order)
- Obter um pedido específico (get single order)
- Mostrar os pedidos do usuário (show current user orders)
- Atualizar o pedido (update order)

#### Funções disponíveis apenas para os usuários autenticados como admin:
- Obter todas as ordens (get all orders)

#### Características gerais:
- Projeto utiliza o banco de dados MongoDB através da biblioteca mongoose
- Senha criptografada com o bcryptjs para assegurar a segurança do usuário
- Quando o usuário se loga e passa na autenticação, um token é gerado através da biblioteca jsonwebtoken, que autoriza o usuário acessar as funcionalidades do projeto
- Token armazenado nos cookies do navegador através da biblioteca cookie-parser
- O sistema responsável por gerenciar a imagem mandada através do (upload image) é feito através da biblioteca express-fileupload
- Manipulação de erros para erros de validação do mongoose, de emails duplicados e cast errors
- Uso seguintes bibliotecas para fornecer segurança ao projeto:
- helmet: responsável pela segurança relacionada aos http response headers
- cors: permite o acesso através de domínios diferentes
- xss-clean: "sanitize the user input"
- express-mongo-sanitize: protege contra injeções maliciosas direcionadas ao mongoDB
- Uso da biblioteca express-rate-limit para limitar o número de acessos por um usuário
- O arquivo json é documentado através da biblioteca docgen, você pode acessar a documentação através do link: https://ecommerceapi-node.onrender.com/#jump-Product-GetSingleProduct

Projeto implantado na nuvem através do sistema de nuvem Render

INSTALLATION

- install dependencies with `npm install` command
- create .env and provide correct values for: 
  - MONGO_URI=<YOUR_MONGO_URI>
  - JWT_SECRET=<YOUR_JWT_SECRET>
  - JWT_LIFETIME=<e.g. '1d'>
- start the project with `npm start`
- you should see "Server is listening ...." text
