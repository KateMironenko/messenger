# Build

FROM node:18-alpine as build
WORKDIR /usr/src/app

COPY . .

RUN apk add --update --no-cache python3 build-base
RUN npm ci --no-optional
RUN npm run build

# Run

FROM node:18-slim
WORKDIR /usr/src/app

COPY . .

COPY --from=build /usr/src/app/dist/ /usr/src/app/dist/
COPY --from=build /usr/src/app/node_modules/ /usr/src/app/node_modules
CMD npm run serve
