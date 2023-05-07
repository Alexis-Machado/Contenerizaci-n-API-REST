FROM node:16

WORKDIR /Users/Usuario/Downloads/ContenerizaciónAPIREST

COPY appmonolitica/package*.json ./

# Instalar las dependencias de Node.js
RUN npm install
COPY appmonolitica .

# Exponer el puerto utilizado por la aplicación
EXPOSE 6001

# Ejecutar la aplicación
CMD ["npm", "start"]
