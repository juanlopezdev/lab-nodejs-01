# 🔬 Laboratorio NodeJS 01

Backend completo de la red social minimalista **PlatziSocial**. Tiene **microservicios** con usuarios, posts, follow e interacciones. 

Esta laboratorio se basa en el **Curso Práctico de Nodejs** de Platzi impartido por Carlos Hernández 

* [Instalación](#instalación)
* [Gestión de microservicios con PM2](#gestión-de-microservicios-con-PM2)
* [Diccionario](#diccionario)
* [Problemas y soluciones](#problemas-y-soluciones)

## Instalación

Instalar dependencias 😀
```
npm i
```

## Gestión de microservicios con PM2

Instalación PM2
```
npm i -g pm2
```

Ver procesos activos
```
pm2 status
```

Iniciar un proceso
```
pm2 start api/index.js
```

Ver logs
```shell
# Todos
pm2 logs
# Proceso específico
pm2 logs 0
```

Detener
```
# Todos
pm2 stop all
# Proceso específico
pm2 stop 0
```

## Diccionario

* **Serverless**: La computación sin servidor (o serverless para abreviar) es un modelo de ejecución en el que el proveedor en la nube (AWS, Azure o Google Cloud) es responsable de ejecutar un fragmento de código mediante la asignación dinámica de los recursos. 
* **Zeit Now**: Plataforma serverless

## Problemas y soluciones

* npm o node no funciona en mi terminal [link](https://gist.github.com/juanlopezdev/06f72d6b301881803bd830ff27710e7a#problema-1-npm-o-node--v-no-funciona-en-mi-terminal)
<script src="https://gist.github.com/juanlopezdev/06f72d6b301881803bd830ff27710e7a#problema-1-npm-o-node--v-no-funciona-en-mi-terminal"></script>

