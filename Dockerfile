
FROM node:16.10.0-alpine AS build

# build pathies
ARG APP_ROOT=/home/node/app
ARG BUILD_PATH=$APP_ROOT/build

ENV PATH $APP_ROOT/node_modules/.bin:$PATH

# create build folders
RUN mkdir -p $APP_ROOT/node_modules && chown -R node:node $APP_ROOT
WORKDIR $APP_ROOT

# install dependencies
COPY package*.json ./
RUN npm ci --silent

# make bundle
COPY . .
RUN npm run build
RUN npm prune --production



FROM nginx:1.21-alpine

# move bundles to nginx
COPY --from=build ./home/node/app/build /usr/share/nginx/html

# replace nginx config file
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build ./home/node/app/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
