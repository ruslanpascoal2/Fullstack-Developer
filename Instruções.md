## Instruções

Para facilitar o acesso à aplicação, fiz o deploy das 2 APIs Spring e da aplicação Angular no Heroku.

#### REST API da aplicação

  Endpoints para consulta:
  - http://ecommerce--api.herokuapp.com/api/customers
  - http://ecommerce--api.herokuapp.com/api/products
  - http://ecommerce--api.herokuapp.com/api/orders

  Endpoints para inserções, deleções e atualizações:
  - http://ecommerce--api.herokuapp.com/api/customer
  - http://ecommerce--api.herokuapp.com/api/product
  - http://ecommerce--api.herokuapp.com/api/order

#### API Cálculo de Frete

  Endpoint que retorna o valor de frete:
  - http://frete--api.herokuapp.com/api/shipping/ {{quantidade de itens}}
    - ex: http://frete--api.herokuapp.com/api/shipping/9 => retorno: 78.86
    
    
#### Aplicação Cliente Angular

  https://ecommerce--web.herokuapp.com/
  
 
