# Diseño

## Base de datos

### Diseño Conceptual Entidad Relación

Existen varias Escuelas, cada una de estas escuelas dispone de una o
varias aulas.

Los instructores sólo pueden pertenecen a una escuela, y las tareas que
realizan (por ejemplo, cursos) tienen una fecha de inicio y una fecha
final, y pueden ser realizadas en una o en ninguna aula.

Además, los instructores también pueden tener periodos de inactividad
como por ejemplo, vacaciones, bajas, días especiales, etc...

Las aulas pueden estar no disponibles, por ejemplo, por festivos, obras,
u otros motivos...

En la Figura 13 se muestra el diagrama Entidad-Relación, la estructura
final de las tablas se puede observar en la Figura 14, y en los Anexos
se incluye el Diseño Lógico y Físico de la base de datos

![](/proyecto-daw-docs/media/image14.jpeg)

*Figura 13 - Diagrama Entidad-Relación*

![](/proyecto-daw-docs/media/image15.jpeg)

*Figura 14 - Estructura de tablas*

## Orientación a objetos

### Diagramas de clases.

![](/proyecto-daw-docs/media/image16.jpeg)

*Figura 15 - Diagrama de clases*

### Diagrama de secuencias

El siguiente diagrama de secuencia muestra la secuenciación temporal del
caso de uso "Mostrar estadísticas".

![](/proyecto-daw-docs/media/image16.jpeg)

*Figura 16 - Diagrama de secuencia del caso de uso "Mostrar estadísticas"*

### Diagrama de actividad

A continuación se muestra el diagrama de actividad del sistema de
guardado de datos desde el planificador hasta la base de datos.

Una vez que el usuario realiza algún cambio en el planificador, puede
guardar la información pulsando el botón "Guardar en BBDD".

Los datos se envían desde el ordenador del usuario hasta el servidor, en
caso que no exista comunicación con el servidor, se debe mostrar en
pantalla el mensaje "Error de comunicación con el servidor".

Si los datos llegan al servidor, comienza el proceso de actualización y
guardado de los datos en el servidor. En caso que exista algún error en
este proceso, se deben restaurar los datos existentes anteriormente y
mostrar en la pantalla del usuario un mensaje de "error en los datos".

Si todo ha funcionado correctamente, se deberá mostrar un mensaje de
"éxito en el guardado" en la pantalla del usuario.

A continuación se muestra el diagrama de actividad explicado:

![](/proyecto-daw-docs/media/image18.jpeg)

*Figura 17 - Diagrama de actividad del sistema de guardado de la
planificación en la BBDD*

## Mapa web

En la siguiente figura se muestra el mapa del sitio web, con las
principales páginas y sus enlaces, en función del perfil de usuario que
accede al aplicativo.

![](/proyecto-daw-docs/media/image19.jpeg)

*Figura 18 - Mapa del sitio web según el perfil del usuario.*

## Mockups

En este apartado se muestran los bocetos de las principales páginas del
sitio.

Una vez logueado el Administrador, se muestra su Home del sitio que
sirve de enlace entre los diferentes apartados principales.

![](/proyecto-daw-docs/media/image20.jpeg)

*Figura 19 - Mockup del Home del sitio web.*

El apartado *Planifica* muestra en la zona superior, bajo el header,
tres formularios seleccionables desde pestañas. Más bajo, las dos líneas
de tiempo donde se muestran las tareas que afectan a los instructores y
a las aulas empleadas, respectivamente.

![](/proyecto-daw-docs/media/image21.jpeg)

*Figura 20 - Mockup del apartado "Planificación" del sitio web.*

Los apartados de *Edición de datos*, *Configuración* y *Estadísticas*
básicamente muestran tablas con una estética "Bootstrap".

![](/proyecto-daw-docs/media/image22.jpeg)

Figura 21 - Mockup de los apartados de edición configuración y
estadísticas.
