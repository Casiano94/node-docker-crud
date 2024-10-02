# Usa la imagen de Node.js oficial
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación al contenedor
COPY . .

# Expone el puerto
