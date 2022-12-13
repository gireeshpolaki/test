# CART API

Cart API is build using NodeJS with in memory database

## Installation

NodeJS is requrired

```bash
npm install
```

Add a .env file with the below properties

```bash
PORT
JWT_SECRET_KEY
```

To start the application
```bash
npm start
```

## Usage

1. GET JWT TOKEN 
```curl
POST localhost:3000/api/user/generateToken
```

input payload
```json
{
  username: "string"
}
```

returns
```json
{
  token: "xxxx"
}
```

2. Add Item to Cart

```curl 
POST localhost:3000/api/cart/additem
```
```curl
Authorization using Bearer Token received from get token api
````

input payload
```json
{
  name: "string",
  price: number
}
```

returns
```json
{
    "success": true,
    "message": "Added Item to your cart gireesh"
}
```

3. GET Cart

```curl
Authorization using Bearer Token received from get token api
````

```curl 
localhost:3000/api/cart
```

returns
```json
{
    "total": 230,
    "items": [
        {
            "name": "apple",
            "price": 20,
            "quantity": 1
        },
        {
            "name": "mango",
            "price": 210,
            "quantity": 1
        }
    ]
}
```

## Contributing



## License

[MIT](https://choosealicense.com/licenses/mit/)