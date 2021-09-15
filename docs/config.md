# Node
## Comenzar con node para crear un package.json
npm init -y

## Instalar Dependencias del Proyecto:
npm install mysql express cors

## Instalar Dependencias de Desarrollo: Para evitar tener que reiniciar el servidor por cada modificación.
npm install nodemon -D

## Ejecutar proyecto de inicio
node ./src/database/conexion.js

# MySQL
## Solucionar problema de conección con el servidor de la conección de la base de datos de MySQL.
reconfiguración de "MySQL Installer->MySQL Server->Authentication Method": "Use Legacy Authentication"