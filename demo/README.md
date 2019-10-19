# Executar demo

## Preparar o banco de dados

Execute os comandos no MySQL Workbench

Criar banco de dados `PET_SHOP`
```sql
CREATE DATABASE PET_SHOP;
```

Usar banco `PET_SHOP`
```sql
USE PET_SHOP;
```

Criar tabela `CLIENT`
```sql
CREATE TABLE CLIENT (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  birthday date NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;
```

Criar tabela `PHONE`
```sql
CREATE TABLE PHONE (
  id int unsigned NOT NULL AUTO_INCREMENT,
  type enum('landline', 'mobile') DEFAULT NULL,
  area_code tinyint unsigned NOT NULL,
  id_client int unsigned NOT NULL,
  phone_number bigint unsigned NOT NULL,
  PRIMARY KEY (id),
  KEY FK_CLIENT_PHONE (id_client),
  CONSTRAINT FK_CLIENT_PHONE FOREIGN KEY (id_client) REFERENCES CLIENT (id) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB;
```

----

## Preparar à aplicação

Entra na pasta `demo` e executar o comando `npm install` no terminal

Exemplo:
```
giovane-summit@giovane-summit:demo(master)$ npm install
npm WARN demo@1.0.0 No description
npm WARN demo@1.0.0 No repository field.

audited 132 packages in 1.706s
found 0 vulnerabilities

giovane-summit@giovane-summit:demo(master)$
```

Execute o comando `npm start` no terminal para iniciar a aplicação

O terminal deve imprimir as seguintes mensagens:
```
giovane-summit@giovane-summit:demo(master)$ npm start

> demo@1.0.0 start /media/giovane-summit/Dados/Summit/hackathon/2019-10-09-fatec/demo
> node app.js

Servidor iniciado
Iniciando conexão em banco de dados
Conectado ao banco de dados
```

Caso você receba o seguinte erro
```js
{ 
  Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
  ...
  code: 'ER_NOT_SUPPORTED_AUTH_MODE',
  errno: 1251,
  sqlMessage:
   'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
  sqlState: '08004',
  fatal: true
}
```

Vá ao MySQL Workbench e execute os seguintes comandos
```sql
ALTER USER '${usuario}' IDENTIFIED WITH mysql_native_password BY '${senha}';

FLUSH PRIVILEGES;
```
> Substitua `${usuario}` pelo usuário utilizado pela aplicação e `${senha}` pela senha utilizada pela aplicação

----

## Testar à aplicação

Abra o postman e crie uma nova `Request` clicando no símbolo `+`

Troque o método de `GET` para `POST`

Insira a url `http://localhost:3000/clientes`

Vá na aba body

Clique no radio button `raw`

No select box que apareceu na direita dos radio buttons, selecione `JSON`

Cole o seguinte JSON
```json
{
    "nome": "Giovane Souza",
    "dataNascimento": "1994-09-10",
    "telefones": [
        {
            "tipo": "landline",
            "codigoArea": "11",
            "numero": "123456789"
        },
        {
            "tipo": "landline",
            "codigoArea": "11",
            "numero": "234567890"
        },
        {
            "tipo": "mobile",
            "codigoArea": "11",
            "numero": "345678901"
        }
    ]
}
```

E clique em `Send`

Ou faça vir `curl` no terminal:
```bash
curl -X POST http://localhost:3000/clientes \
-H 'Content-Type: application/json' \
-d '{"nome": "Giovane Souza", "dataNascimento": "1994-09-10", "telefones": [{"tipo": "landline", "codigoArea": "11", "numero": "123456789"}, {"tipo": "landline", "codigoArea": "11", "numero": "234567890"}, {"tipo": "mobile", "codigoArea": "11", "numero": "345678901"}]}'
```

MySQL de desenvolvimento em Docker:
```bash
docker run -d \
--name mysql \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=senhamaster \
-e MYSQL_DATABASE=pet_shop \
-e MYSQL_USER=aplicacao \
-e MYSQL_PASSWORD=senhaaplicacao \
mysql:8
```