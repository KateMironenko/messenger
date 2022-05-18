FROM ubuntu:18.04
RUN apt update && apt install -y nodejs && apt install -y npm
WORKDIR /var/www
COPY ./index.ts index.ts
EXPOSE 3000
CMD webpack