# Estudio de viabilidad. Método DAFO.

El presente proyecto intenta solventar un problema existente del
departamento de formación de Volkswagen España.

A continuación se muestra un análisis DAFO del presente proyecto.

<table>
<thead>
<tr class="header">
<th><strong>Factores internos</strong></th>
<th><strong>Factores externos</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Debilidades</strong></td>
<td><strong>Amenazas</strong></td>
</tr>
<tr class="even">
<td><ul>
<li><p>En el departamento no hay apenas experiencia en el desarrollo de aplicaciones web.</p></li>
<li><p>Resistencia al cambio de los responsables del departamento.</p></li>
<li><p>Mi propia poca experiencia en el ámbito de desarrollo de aplicaciones web.</p></li>
</ul></td>
<td><ul>
<li><p>Gran dependencia de la librería Vis y de su módulo Timeline.</p></li>
<li><p>Que por algún motivo, la empresa decida no utilizar el aplicativo.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td><strong>Fortalezas</strong></td>
<td><strong>Oportunidades</strong></td>
</tr>
<tr class="even">
<td><ul>
<li><p>No he visto herramientas similares que puedan competir tan directamente.</p></li>
<li><p>Creación de reportes de forma inmediata.</p></li>
<li><p>Ahorro de tiempo en planificación.</p></li>
<li><p>Alta posibilidad de evolución del aplicativo.</p></li>
</ul></td>
<td><ul>
<li><p>El cliente final demanda herramientas digitales de este formato.</p></li>
<li><p>Aunque el aplicativo es exclusivo para el departamento, con modificaciones se puede crear una herramienta más generalista y aplicable a otros entornos.</p></li>
<li><p>Oportunidad de crecimiento personal.</p></li>
</ul></td>
</tr>
</tbody>
</table>

## Licencia

El tipo de licencia seleccionada es el de *Software privativo*
([[https://es.wikipedia.org/wiki/Software\_propietario]](https://es.wikipedia.org/wiki/Software_propietario)).
El principal motivo es que el aplicativo va a ser empleado en un ámbito
privado, por lo que existe la posibilidad de obtener un rendimiento
económico.

Este tipo de licencia es compatible con las licencias del software de
terceros empleados en el proyecto. Laravel, Bootstrap, Timeline-plus,
TableSorter y Jquery tienen licencia MIT
([[https://es.wikipedia.org/wiki/Licencia\_MIT]](https://es.wikipedia.org/wiki/Licencia_MIT)),
la cual permite reutilizar software dentro de software privativo.

## Estudio de mercado.

### Viabilidad técnica/económica del proyecto

#### Recursos de hardware

Los recursos de Hardware son pocos y bastante económicos:

Para el desarrollo, con un ordenador de gama media es suficiente. En la
actualidad, cualquier computadora de unos 500€ es más que suficiente
para el desarrollo del programa. Otros requerimientos pueden ser: una
conexión a internet, un monitor adicional, ratón, teclado, etc... Es
decir, nada excepcional.

Para el despliegue se va optar por un servicio en la nube, en concreto
con un VPS de la empresa OVH. Dentro de su oferta de VPS, con la más
básica es suficiente: 1 vCore(s), 2'4 GHz, 2 GB RAM y 20 GB SSD por unos
3'5€/mes.

#### Recursos de software

Todo el software empleado para el desarrollo es gratuito y open source:
Vis/Timeline, Laravel, Jquery, Tablesorter, Visual Studio Code, Git,
etc...

#### Recursos humanos

Mayormente se requiere de un programador y, puntualmente, del
responsable del departamento para ir realizando reuniones esporádicas
donde se plantean los requerimientos y se exponen los avances del
aplicativo.

### Viabilidad temporal

La viabilidad temporal en lo referente a plazos es bastante elevada:
desde febrero del 2018 hasta aproximadamente junio del 2019. Esto es
debido a que los exámenes del grado fueron finalizados en febrero del
2018, y por motivos laborales, las FCT se desarrollan a lo largo de todo
el curso lectivo 2018/19.

Sin embargo, aunque el plazo de tiempo es elevado, debido a las
condiciones laborales, FCTs y cargas familiares, la disponibilidad de
tiempo es muy limitada.

Por lo que el proyecto se va desarrollando en tiempos cortos durante un
largo periodo.

## Planificación temporal o agenda de trabajo. 

A continuación se muestra la planificación temporal del proyecto. Debido
al amplio plazo ha habido momentos de paro, así como modificaciones a la
idea inicial del proyecto.

![](/proyecto-daw-docs/media/image9.png)

Para la realización del siguiente diagrama he empleado el módulo
Timeline-plus (fork de Vis).

![Gant\_Timeplus](/proyecto-daw-docs/media/image10.jpeg)

*Figura 9 -- Diagrama de la planificación temporal del proyecto*
