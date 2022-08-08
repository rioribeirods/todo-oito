Repositório criado para TODO 8 do curso Desenvolvimento Web Fullstack by Resilia Educação.

Basicamente nele eu criei um banco de dados que recebe dicas para desenvolvedores em .json.

Exemplo: 

POST http://localhost:3000/create

{ 
 "tip": "devs precisam comentar seus códigos"
}

Depois de inserir as dicas que quiser, você pode receber uma dica aleatoriamente em:

GET http://localhost:3000/tips