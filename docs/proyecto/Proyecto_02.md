# Estado del arte. Justificación de las herramientas seleccionadas.

## Lado cliente

### librería Visjs

Para el presente proyecto se debe realizar una mención especial sobre la
librería de JavaScript Visjs (*http://visjs.org/*). En concreto, su
módulo Timeline.

![](/proyecto-daw-docs/media/image4.jpeg)

*Figura 4 - Ejemplo básico del módulo Timeline de visjs
(http://visjs.org/examples/timeline/basicUsage.html)*

El módulo Timeline muestra por pantalla una línea de tiempo
completamente interactiva. La línea de tiempo se puede desplazar
horizontalmente para moverse por diferentes fechas, así como ampliar y
reducir las fechas mostradas de forma dinámica.

Al mismo tiempo se pueden colocar diferentes tipos de elementos sobre la
línea de tiempo (ver los elementos *ítem* de la figura). Además, la
librería permite interactuar sobre ellos: Aumentar o reducir su
duración, desplazarlos a otras fechas, eliminarlos, etc...

Tanto la línea de tiempo, como los elementos que se pueden mostrar en
ella son ampliamente configurables. La librería incluye una
documentación (*http://visjs.org/docs/timeline/*) sobre las opciones,
métodos, eventos, etc... así como multitud de ejemplos
(*http://visjs.org/timeline\_examples.html*).

El uso de esta librería es imprescindible para la realización del
proyecto, ya que el principal requisito para el aplicativo es que el
interfaz del usuario sea interactivo, es decir, que las tareas se puedan
representar sobre una línea de tiempo y además que el usuario pueda
modificarlas a su antojo.

En la actualidad, no he encontrado ninguna otra librería con estas
características por lo que el uso de Vis (módulo Timeline) es
imprescindible, y elemento clave, para la realización de este proyecto.

::: warning Nota

En el momento de la redacción del presente proyecto, el proyecto Vis.js
está en un proceso de refundación. Debido a la falta de soporte de la
empresa creadora del proyecto (Almende), se están creando forks
independientes que tratan de separar los diferentes módulos de Vis (y
probablemente, generar una nueva comunidad, que integre estos módulos ya
separados).
:::

Durante el desarrollo del proyecto, pase de usar el módulo Visjs, al
fork *Timeline-plus* (https://github.com/yotamberk/timeline-plus). Este
cambio no ha supuesto ningún problema, puesto que son completamente
compatibles entre sí.

<table>
<tbody>
<tr class="odd">
<td><p><img src="/proyecto-daw-docs/media/image5.jpeg" alt="LogoVis" style="width:1.78889in;height:1.38056in" /></p>
<p>Figura 5 - Logo de Vis.js</p></td>
<td><p><img src="/proyecto-daw-docs/media/image6.png" alt="C:\Users\Javi\AppData\Local\Microsoft\Windows\INetCache\Content.Word\TimelinePlus.png" style="width:1.28139in;height:1.37795in" /></p>
<p>Figura 6 - Logo Timeline-plus</p></td>
</tr>
</tbody>
</table>

### Otras librerías de JavaScript

Para la realización del proyecto también se ha utilizado la librería
JQuery tanto como para interactuar con la librería Vis como con el resto
de elementos del DOM.

Se han descartado frameworks de front-end como React o Vue por el hecho
de no conocerlas, además de que he preferido dedicarle más tiempo al
estudio de Vis, así como en profundizar en el framework de Laravel. Por
otro lado, he pensado que la integración de Vis con estos frameworks
podría generarme problemas durante el desarrollo del aplicativo.

Otras librerías de Javascript que se han empleado en el proyecto han
sido los pluggins de jquery Tablesorter 1 y 2. Estas librerías
incorporan funcionalidades a las tablas. De esta forma se pueden mostrar
las tablas con opciones de ordenación y filtrado de elementos.

### Bootstrap 4

Para el diseño de la página se ha empleado el framework de CSS Bootstrap
en su versión 4. El principal motivo del uso de este framework, y que se
hayan descartado otros frameworks como Material Design o Bulma, es que
es el que he estudiado en el ciclo formativo. Además de que Bootstrap
tiene una amplia comunidad y documentación del usuario.

![](/proyecto-daw-docs/media/image7.jpeg)

*Figura 7 - Logo de Bootstrap*

## Lado servidor: Laravel

En el lado servidor se ha empleado el Framework de PHP: Laravel
(*https://laravel.com/*).

![LaravelLogo](/proyecto-daw-docs/media/image8.jpeg)

*Figura 8 - Logo de Laravel*

Laravel es un completo framework para poder trabajar con el servidor.
Permite entre otras cosas la creación sencilla de un sistema de
autentificación, comunicarse con la base de datos mediante el ORM
Eloquent o el uso de Query Builder, creación de validaciones, etc...

Laravel es Open Source y está en continuo crecimiento, además de tener
una amplia comunidad.

A continuación se listan los principales motivos para la elección de
Laravel en el servidor:

-   Lo hemos empleado en el ciclo formativo, por lo que ya se dispone de
    conocimientos del framework.

-   Laravel dispone de una amplia comunidad que está en continuo
    crecimiento. Por lo que es muy fácil encontrar tutoriales o foros
    con la resolución de problemas.

-   Los requisitos para su despliegue están bastante estandarizados:
    Apache (o Nginx), PHP, etc...

-   La documentación oficial es excelente, además de tener una curva de
    aprendizaje no muy alta.

Respecto a otros frameworks del lado servidor, los he ido descartando
por los siguientes motivos.

* Symphony: Curva de aprendizaje muy elevada.

* CodeIgniter: Actualmente considero que Laravel tiene mayor proyección.

* Express/Nodejs: Aunque es un framework muy potente, la documentación
existente es más pobre que la de Laravel.

* Django: Desconocimiento del lenguaje de Python y la documentación del
framework es más pobre que la de Laravel.

## Otras herramientas

A continuación se listan una serie de herramientas genéricas se han
empleado durante el desarrollo del proyecto.

* Visual Studio Code -- Editor de código.

* Git -- Control de versiones.

* Bitbucket -- Repositorio centralizado de Git.

* Trello -- Gestión del proyecto.

* XAMPP -- Entorno de desarrollo en local.

* Draw.io (https://www.draw.io/) -- Para el diseño de mockups y
    diagramas ER y UML.

* Yuml.me (https://yuml.me) -- Para la creación de los diagramas de
    casos de uso.
