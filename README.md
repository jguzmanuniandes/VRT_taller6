# VRT - Taller 6

## Links

1. Link de la aplicación de paleta de colores (Carpeta VRT_colorPallete)

[http://paletadecolores.s3-website-us-east-1.amazonaws.com/](http://paletadecolores.s3-website-us-east-1.amazonaws.com/)

2. Link de la aplicación de VRT testing (Carpeta VRTconCypress)

[http://ec2-52-87-225-52.compute-1.amazonaws.com/](http://ec2-52-87-225-52.compute-1.amazonaws.com/)

**LINKS DISPONIBLES HASTA EL 25 DE OCTUBRE**

## Preguntas

1.  ¿Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing?

RTA/ Los screenshots son tomados tal cual Cypress ve la pantalla al momento de hacer la ejeución, es decir, son dependientes en resolución y en el motor del navegador, lo que limita la vista de las imágenes y la comparación de las mismas con las herramientas de automatización.

2. ¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?.

RTA/ El color, el brillo y la transparencia

3. ¿Qué información puedo obtener al comparar dos imagenes?

RTA/ De la herramienta se pueden obtener diferentes datos como el procentaje de match entre las imágenes, las diferencias, el buffer de datos con las diferenncias entre las imágenes, las diferencias en las dimensiones de las imágenes en caso de tenerlas.

4. ¿Qué opciones se pueden seleccionar al realizar la comparación ?

RTA/ La transparencia, el error de color, así como ignorar el color, el tipo de error, los parámetros de salida

## Funcionamiento

Para hacer funcionar la aplicación basta con correr los siguiente comandos dentro de la carpeta VRTconCypress

```
npm install
npm start
```

Acá se puede ver un gif de la herramienta funcionando (duración de 36 segundos):

![VRT](/docs/vrt_testing.gif)


