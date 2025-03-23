# syntax=docker/dockerfile:1.4
FROM node:23-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN --mount=type=cache,target=/usr/src/app/.yarn YARN_CACHE_FOLDER=/usr/src/app/.yarn \
    yarn install --frozen-lockfile

COPY . .

RUN yarn run build 

FROM nginx:1.27.4-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]