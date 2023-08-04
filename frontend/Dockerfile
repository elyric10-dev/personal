FROM node:18-alpine

ENV PORT 3000

WORKDIR /frontend/app

COPY package.json .
COPY package-lock.json .

RUN NODE_ENV=development npm i

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "dev"]