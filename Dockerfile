FROM library/node:14 as build-stage
WORKDIR /srv
COPY . .
RUN npm install
RUN npm run build

FROM library/httpd:alpine
COPY --from=build-stage /srv/dist /usr/local/apache2/htdocs
