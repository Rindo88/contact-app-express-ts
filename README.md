# Contact App Express TS

This is a Contact App built with Express and TypeScript. The application allows users to register, login, and manage their contacts and addresses.

## Features

- User Registration
- User Login
- Create, Read, Update, Delete (CRUD) Contacts
- Create, Read, Update, Delete (CRUD) Addresses

## Prerequisites

- Node.js
- PostgreSQL
- Prisma

## Setup

1. Clone the repository:

```bash
git clone https://github.com/Rindo88/contact-app-express-ts.git
cd contact-app-express-ts
```

2. Install dependencies:

```bash
npm install
```

3. Set up the database:

- Create a `.env` file in the root directory and add your database URL:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/contactapp
```

- Run Prisma migrations:

```bash
npx prisma migrate dev
```

4. Start the application:

```bash
npm run dev
```

## API Documentation

### User API

- [User API Specification](./docs/user.md)

### Contact API

- [Contact API Specification](./docs/contact.md)

### Address API

- [Address API Specification](./docs/address.md)

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## License

This project is licensed under the MIT License.
