# Webhook em NodeJS

Instalando os pacotes: `npm install` 

A notificação acontece quando um pagamento for incluido usando o endpoint: http://localhost:5000/payment/create

```
{
    "name": "Produto 1",
    "price": 89.50
}
```

O ciente recebe os recurso criado e inclui no próprio banco:


<img src='./img/Captura de tela 2022-09-14 144557.png'>

----
## Diretorio 

### api
Para iniciar a aplicação: `npm start`

### client
Para iniciar a parte do 'Cliente': `npm start` 