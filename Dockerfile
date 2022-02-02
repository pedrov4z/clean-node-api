FROM node:16
WORKDIR /usr/local/src/clean-node-api
COPY ./package.json .
RUN yarn --prod
COPY ./dist ./dist
EXPOSE 5000
CMD yarn start