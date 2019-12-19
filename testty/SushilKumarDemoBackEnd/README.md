run:
npm install

In .env  enter your JWT secret:
JWT_SECRET=

run the migration:
node_modules/.bin/sequelize db:migrate

start the application:

npm run dev
The server will be running on http://localhost:4000/api.
