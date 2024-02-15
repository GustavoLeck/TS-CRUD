FROM node:16-alpine

WORKDIR /usr/app

COPY ./package.json .

RUN npm i
RUN npx prisma generate -y

COPY . .

CMD ["npm", "start"]
