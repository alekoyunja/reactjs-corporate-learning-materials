# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:16-alpine AS deploy
WORKDIR /workspaces/reactjs-corporate-learning-materials
ENV PATH /workspaces/reactjs-corporate-learning-materials/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:alpine AS prod
COPY --from=deploy /workspaces/reactjs-corporate-learning-materials/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
