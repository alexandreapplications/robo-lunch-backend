FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
ENV EXPRESS_PORT=8080
COPY . /app
EXPOSE 8080
CMD ["npm", "start"]

