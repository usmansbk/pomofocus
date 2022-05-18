FROM node:18-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install --silent
RUN yarn add react-scripts --silent
RUN yarn add serve
CMD ["yarn", "run build"]
CMD ["yarn", "start"]

