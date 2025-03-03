FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN corepack enable
RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "serve"]