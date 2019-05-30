# Herramientas de apoyo

## Control de versiones y gestión de pruebas

Durante todo el desarrollo del proyecto se ha empleado el sistema de
control de versiones Git junto con el siguiente repositorio en
BitBucket:

[[https://bitbucket.org/javdome/proyectopfc]](https://bitbucket.org/javdome/proyectopfc)

Además, en el servidor también se ha instalado Git para los procesos de
integración y despliegue del aplicativo.

Para las comprobaciones del código no se han programado tests para su
verificación. Lo que se ha ido realizando han sido comprobaciones
manuales de forma continuada a medida que se ha ido programando.

Lo que sí se ha realizado ha sido seguir un proceso de desarrollo con
Git de forma estructurada. De esta forma, se ha creado una rama
*Develop*, y a partir de esta, nuevas ramas para cada una de las
funcionalidades. Una vez que se desarrollaba una nueva funcionalidad, y
se comprueba que funciona correctamente, se fusionaba con *Develop*. Y,
en el momento que se consideraba oportuno, se procedía a fusionar
*Develop* con la rama *Master*.
