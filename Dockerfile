FROM node:14.15.2-alpine as builder

WORKDIR /app
COPY . .
COPY ./package.json ./
RUN npm install && npm cache clean --force
RUN if [ "$AUDIT_FIX" = "true" ]; then npm audit fix; fi;
RUN npm run build

FROM node:14.15.2-alpine
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:dev"]