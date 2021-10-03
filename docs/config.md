# Node
## Comenzar con node para crear un package.json
npm init -y

## Instalar Dependencias del Proyecto:
npm install mysql express cors

## Instalar Dependencias de Desarrollo: Para evitar tener que reiniciar el servidor por cada modificación.
npm install nodemon -D

# MySQL
## Solucionar problema de conección con el servidor de la conección de la base de datos de MySQL.
reconfiguración de "MySQL Installer->MySQL Server->Authentication Method": "Use Legacy Authentication"

## Ejecutar el query.sql
El código debe ser ejecutado en MySQL directamente, para evitar errores en la ejecución por las configuraciones de VSCode-Database.

## Ejecutar proyecto de inicio
node ./src/database/conexion.js

## Ejecutar el index.js
npx nodemon "src/js/index.js"
<!-- nodemon index // No funcionó -->
<!-- npm start "src/js/index.js" // Camino Errado -->