FROM node:16-alpine
RUN apk update
RUN apk add git vim

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock","./"]

RUN yarn

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
