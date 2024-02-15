FROM node:20-alpine

WORKDIR /usr/app

COPY ./package.json .

RUN npm i
RUN npx prisma generate 

COPY . .

CMD ["npm", "run", "start"]
