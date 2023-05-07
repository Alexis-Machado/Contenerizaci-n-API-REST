FROM node:16

WORKDIR /Users/Usuario/Downloads/ContenerizaciónAPIREST

COPY microappuniversidades/package*.json ./

# Instalar las dependencias de Node.js
RUN npm install
COPY microappuniversidades .

# Exponer el puerto utilizado por la aplicación
EXPOSE 6000

# Ejecutar la aplicación
CMD ["npm", "start"]
