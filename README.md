# Expenses App

This is a simple expenses app that allows you to add, edit, and delete expenses.

## Installation

1. Run `docker-compose up -d` to start a database container.
2. Run:

```bash
npm install;
cd api; npm install; npx prisma migrate dev; npx prisma db seed; cd ..;
cd web; npm install; cd ..;
npm run dev;
```

3. Open your browser and go to `http://localhost:3001`
4. Open your the GraphQL Playground and go to `http://localhost:3000/graphql`
