# NLW Expert (Java)

[![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

[![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)


Esse projeto é uma API feita usando **Nodejs, Websocket, PostgresSQL**

Essa API foi desenvolvida durante o evento NLW EXPERT da rocketseat

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/robsu17/nlw-expert-node.git
```

2. Instale as dependências usando npm install

3. Install [PostgresSQL](https://www.postgresql.org/)
4. Rode o container docker (desktop docker required [DOCKER DESKTOP](https://www.docker.com/products/docker-desktop/))
```bash
docker compose up -d 
```

## Usage

1. Inicie a aplicação usando
```bash
npm run dev
```
2. A API ficará acessível na url http://localhost:3333

## API Endpoints
API endpoints:

```markdown
POST /polls - Cria uma nova enquete 
```
```json
{
	"poll": {
		"id": "daa36834-283e-44b7-9ebd-168b099a32be",
		"title": "Qual melhor framework?",
		"created_at": "2024-02-08T22:48:12.390Z",
		"updated_at": "2024-02-08T22:48:12.390Z"
	}
}
```
```markdown
GET /polls/:pollId - Retorna uma enquete pelo id
```
```json
{
	"poll": {
		"id": "daa36834-283e-44b7-9ebd-168b099a32be",
		"title": "Qual melhor framework?",
		"option": [
			{
				"id": "d38d4a3e-4ce7-4a48-af1d-8d36ff6b3262",
				"title": "React",
				"score": 1
			},
			{
				"id": "e4d5e6aa-6f50-492f-8c2f-eee490adae75",
				"title": "Angular",
				"score": 0
			},
			{
				"id": "89c19b38-a960-4f78-8eca-f71688a8f216",
				"title": "Vue",
				"score": 0
			}
		]
	}
}
```
```markdown
POST /polls/:pollId/votes - Vota em uma enquete pelo parâmetro pollId
```
```json
{
	"id": 4,
	"sessionId": "eca29d59-f8f1-409d-8d11-06e1ebecb6b6.KvKhRIaDwfoYmKL4OhzDRodGg0Iq9mf0qoqrJ3dCmKU",
	"pollOptionId": "59601d53-5078-4893-a070-d965a66668a3",
	"pollId": "b153c3c3-1580-4076-83ab-39a465f4d4ed",
	"createdAt": "2024-02-09T00:04:31.636Z"
}
```

```markdown
WS /polls/:pollId/results - Retorna o resultado da enquete específica em tempo real
```

## TECHs
Esse projeto utiliza [PostgresSQL](https://www.postgresql.org/) como banco de dados.
Também utiliza [Redis](https://redis.io/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the repository.
