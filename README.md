# Website de facts & fictions 

[![Build Status](https://travis-ci.org/FctsFxns/factsandfictions-site.png)](https://travis-ci.org/FctsFxns/factsandfictions-site)


	url: http://www.factsandfictions.net/2016/


## Información para editores

El contenido de la web se gestiona a través de este repositorio de código.

### Configuración

En la carpeta '_data' encontrarás los ficheros de configuración en
formato YAML que te van a permitir gestionar los valores de:

- **global.yml**: textos comunes y valores del sitio web
- **nav.yml**: la navegación principal del sitio web

## Información para desarrolladores

### Instalación

1. Descargar repositorio
1. Ejecutar comando de instalación

	./bin/setup

#### Dependencias

- Ruby & [Bundler](http://bundler.io/)
  - [jekyll-minimagick](https://github.com/zroger/jekyll-minimagick)
- [ImageMagick®](http://www.imagemagick.org/)
- [Bower](http://bower.io/)

### Desarrollo

- [Grunt](http://gruntjs.com/)

Antes de nada es necesario instalar grunt

> npm init

Los comandosde theming son los siguientes:

> grunt --help
> 
> grunt build
> 
> grunt theming

## Variables de desarrollo

Empleamos variables de desarrollo para aprovechar el uso de livereload, por ejemplo.

> export JEKYLL_ENV=development

### Despliegue

El despliegue se realiza de manera automática mediante travis.

**Notas:**

- Solo se realiza el despliegue si se valida correctamente el sitio web con 'html_proofer'

- El despliegue se realiza mediante 'glynn' tan solo para la rama 'deploy'.

- Debe indicar las credenciales FTP del servidor como variables de entorno en Travis.