# 🔬 Laboratorio NodeJS 01

Backend completo de la red social minimalista **PlatziSocial**. Tiene **microservicios** con usuarios, posts, follow e interacciones. 

Esta laboratorio se basa en el **Curso Práctico de Nodejs** de Platzi impartido por Carlos Hernández 

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
```
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

