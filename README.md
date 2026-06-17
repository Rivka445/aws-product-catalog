# AWS Product Catalog

A serverless product catalog web application built with **Angular** and **AWS**.  
Users can browse products by category and view full product details — all data is fetched live from the cloud.

## Architecture

```
Angular App (Frontend)
       │
       ├── Category selected → AWS Lambda (Query) → DynamoDB
       │                        Returns list of products by category
       │
       └── Product selected → AWS Lambda (GetItem) → DynamoDB
                               Returns full details of a single product
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Angular 21 (standalone components, zoneless) |
| Backend | AWS Lambda (Node.js) |
| Database | Amazon DynamoDB |
| API | AWS Lambda Function URLs |

## Features

- Browse products by category
- View full product details
- Serverless backend — no server to manage
- CORS-enabled Lambda functions

## Project Structure

```
src/app/
├── product-list/        # Category selector + product list
├── product-detail/      # Single product detail view
├── services/
│   └── product.ts       # HTTP calls to Lambda functions
└── app.routes.ts        # Application routing
```

## AWS Lambda Functions

| Function | Trigger | Description |
|----------|---------|-------------|
| Query Lambda | `?category=<code>` | Returns all products in a category |
| GetItem Lambda | `?category=<code>&productId=<id>` | Returns a single product |

## DynamoDB Table

**Table name:** `ProductsCatalog`

| Key | Type | Description |
|-----|------|-------------|
| `CategoryCode` | Partition Key | Product category (e.g. `CAT_CLOTHES`) |
| `ProductId` | Sort Key | Unique product identifier |

## Getting Started

```bash
npm install
ng serve
```

Open `http://localhost:4200` in your browser.
