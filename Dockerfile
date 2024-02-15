FROM node:20-alpine

WORKDIR /usr/app

COPY ./package.json .
COPY prisma ./prisma/
COPY . .

RUN npm i
RUN npx prisma generate 

CMD ["npm", "run", "start"]
