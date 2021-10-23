# Demostración de API con Node.JS

Esta es una pequeña demostración de una API utilizando:

-   Node.JS con Typescript
-   MongoDB con Mongoose
-   AdminBro

## Requerimientos

Vas a tener que tener instalado Node.js y yarn instalado en tu maquina. Por otro lado, también tendrás que tener instalado MongoDB para la base de datos.

## Instalar dependencias

Lo primero que debes hacer es instalar las dependencias del mismo. Las puedes instalar corriendo el siguiente comando

```sh
yarn install
```

## Correr el proyecto

Asegurate de tener Mongo corriendo. Luego de iniciarlo puedes iniciar el proyecto con:

```sh
yarn dev
```

Esto iniciara el servidor de desarrollo en **localhost:3001**

Dado que se está usando _AdminBro_ con autenticación para hacer más facil el proceso de añadir datos a la base de datos y de mostrar un backend basico con login deberás iniciar sesión ingresando a **localhost:3001/admin**, las credenciales son las siguientes:
**Usuario**: admin
**Contraseña**: admin

Puedes cambiar estas credenciales mediante el archivo .env.development

Lo primero que necesitas antes de correr el proyecto es instalar las dependencias del mismo. Las puedes instalar corriendo el siguiente comando
