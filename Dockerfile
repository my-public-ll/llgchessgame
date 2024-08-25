FROM node:18-alpine

WORKDIR /src
COPY package.json package-lock.json /src/
RUN npm install

COPY . /src

EXPOSE 8050

CMD ["npm", "run", "start:server"]
