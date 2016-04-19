# Website de facts & fictions 

[![Build Status](https://travis-ci.org/FctsFxns/factsandfictions-site.png)](https://travis-ci.org/FctsFxns/factsandfictions-site)


	url: http://www.factandfictions.net/2016

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