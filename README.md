# API Vendas

Bem-vindo ao projeto **API Vendas**! Este repositório contém o código-fonte para uma API RESTful completa, desenvolvida como parte do curso **"API RESTful com Node.js, TypeScript, TypeORM e muito mais!"**.

## Descrição

Este projeto fornece uma solução robusta e escalável para gerenciar vendas. A API inclui funcionalidades para gerenciar produtos, clientes, pedidos e usuários, além de oferecer controle de estoque e autenticação. Desenvolvido com as tecnologias mais modernas e melhores práticas do mercado.

## Funcionalidades

- **Gestão de Produtos**: CRUD completo para produtos.
- **Gestão de Clientes**: CRUD completo para clientes.
- **Gestão de Pedidos**: Criação e visualização de pedidos, com controle de itens de estoque.
- **Autenticação e Autorização**: Login, recuperação de senha, atualização de perfil e avatar com JWT.

## Tecnologias e Ferramentas

- **Node.js**: Ambiente de execução JavaScript para backend.
- **ExpressJs**: Framework web minimalista para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **TypeORM**: ORM para TypeScript que simplifica a interação com o banco de dados.
- **PostgreSQL**: Banco de dados relacional robusto (via Docker).
- **Redis**: Armazenamento em memória para cache e otimização de performance (via Docker).
- **Cloudflare R2/Amazon S3**: Armazenamento de objetos escalável.
- **Amazon SES**: Serviço para envio de emails transacionais.

## Boas Práticas e Qualidade de Código

- **Design Patterns**: Implementação de soluções elegantes e reutilizáveis.
- **Domain Driven Design (DDD)**: Modelagem eficiente do domínio da aplicação.
- **Princípios SOLID**: Garantia de flexibilidade, manutenibilidade e escalabilidade.
- **Testes Automatizados com Jest**: Assegurando a qualidade da aplicação.

## Recursos Adicionais

- **CORS**: Configuração para acesso de diferentes origens.
- **Tratamento de Erros**: Estratégias para gerenciamento eficiente de erros.
- **Documentação com Swagger**: Documentação dos endpoints da API.
- **Middlewares**: Funções para processar requisições.
- **Migrations**: Controle de versão do banco de dados.
- **Relacionamento Many-to-Many**: Implementação de relacionamentos complexos.
- **Upload de Arquivos**: Funcionalidade para enviar e armazenar arquivos.
- **Cache com Redis**: Otimização de performance.
- **Proteção contra DDoS**: Medidas para proteção contra ataques.
- **Deploy em Produção**: Implantação da API em um ambiente de produção.

## Instalação e Configuração

1. **Clone o Repositório**

 ```bash
 git clone https://github.com/Kayuan165/api-vendas.git
```
 **Instale as Dependências**

2. **Navegue até o diretório do projeto e execute:**

  ```bash
  cd api-vendas
  npm install
  ```
3. **Configure o Ambiente**

Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias. Exemplo:
    
  ```bash
  DATABASE_URL=postgres://user:password@localhost:5432/api_vendas
  REDIS_URL=redis://localhost:6379
  AWS_S3_BUCKET_NAME=your-bucket-name
  AWS_ACCESS_KEY_ID=your-access-key-id
  AWS_SECRET_ACCESS_KEY=your-secret-access-key
  ```
4. **Inicie o Servidor**

  ```bash
  npm start
  ```

  ##Uso
  A API está disponível na porta configurada (padrão: 3000). Exemplos de requisições usando curl:

  Obter Produtos

  ```bash
  curl http://localhost:3000/api/produtos
  ```

  Adicionar Produto

  ```bash
  curl -X POST http://localhost:3000/api/produtos -H "Content-Type: application/json" -d '{"nome": "Produto A", "preco": 100}'
  ```

  Atualizar Produto

  ```bash
  curl -X PUT http://localhost:3000/api/produtos/1 -H "Content-Type: application/json" -d '{"nome": "Produto Atualizado", "preco": 150}'
  ```

  Excluir Produto

  ```bash
  curl -X DELETE http://localhost:3000/api/produtos/1
  ```

  **Contribuição**
  Contribuições são bem-vindas! Para contribuir:

  Faça um fork do repositório.
  
  Crie uma nova branch:
  
  ```bash
  git checkout -b feature/nome-da-sua-feature
  ```

  Faça suas alterações e commit:
  
  ```bash
  git commit -am 'Adiciona nova feature'
  ```

  Envie a branch:
  
  ```bash
  git push origin feature/nome-da-sua-feature
  ```

  Abra um Pull Request.
  
  **Licença**
  Este projeto está licenciado sob a MIT License.
  
  **Contato**
  Para mais informações, entre em contato com kayuandiasoli@gmail.com
