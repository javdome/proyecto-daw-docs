# Implantación

## Diagrama de despliegue

A continuación se muestra el diagrama de despliegue empleado en el
proyecto.

![](/proyecto-daw-docs/media/image26.jpeg)

*Figura 25 - Diagrama de despliegue*

## Proceso de despliegue

El despliegue del proyecto se ha realizado en un servidor virtual VPS de
la empresa OVH con un sistema operativo Ubuntu server 18.04. A
continuación de detalla el proceso seguido:

### Primeros pasos y seguridad

Lo primero que se ha realizado en el servidor ha sido la creación de un
nuevo usuario, con privilegios *sudo*, con el cual acceder al servidor.
Asimismo, por motivos de seguridad, se quita el permiso de acceso al
usuario root. A continuación, y para mayor seguridad, se ha modificado
el puerto de acceso al servidor. De esta forma se accede al sevidor via
ssh:
``` sh
ssh usario@ip.del.vps -p NºPuerto
```

También se ha procedido a la instalación de el Firewall UFW
(Uncomplicated Firewall), el cual es muy sencillo de configurar.

### Instalación del servicios y programas para el despliegue

Aunque parece que el servidor web más recomendable es Nginx, he optado
por Apache por ser el que más conozco.

También he procedido a la instalación y configuración del servidor de
base de datos Mysql. Y, a continuación, he instalado PHP 7.1, así como
una serie de paquetes adicionales, tal y como se solicitan en los
requerimientos de instalación en la documentación oficial de Laravel.

Adicionalmente, se instalan el gestor de dependencias Composer y el
sistema de control de versiones Git con los que se realiza la
instalación del aplicativo.

## Dominio

Se ha adquirido el dominio javidomenech.eu, en el cual se ha configurado
un certificado SSL mediante Let's Encrypt y Certbot. Por último, se ha
creado el siguiente subdominio que lanza el aplicativo:

[[https://planificaftv.javidomenech.eu/]](https://planificaftv.javidomenech.eu/)
