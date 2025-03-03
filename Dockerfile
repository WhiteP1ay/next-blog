FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable
RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "serve"]