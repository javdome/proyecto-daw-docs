# Análisis de requisitos

## Descripción de requisitos

Tras varias reuniones con el cliente/usuario final del aplicativo, se
determinaron los siguientes requisitos del aplicativo.

-   Creación de varios perfiles de usuario, cada uno de ellos con sus
    permisos para realizar diferentes funciones. En el proyecto se crean
    los siguientes perfiles: Instructor, Responsable, Administrador y
    SuperAdministrador.

-   Mediante un entorno amigable y muy visual, el administrador debe
    poder gestionar tareas (ver, crear, modificar y eliminar). Las
    tareas se deben poder visualizar y gestionar desde dos líneas de
    tiempo sincronizadas: una de instructores y otras de las aulas
    empleadas.

-   Se deben poder crear diferentes escenarios de la planificación. Es
    importante disponer de varias planificaciones, ya que ésta puede ir
    variando a lo largo del tiempo. Además, se debe poder cambiar de un
    escenario de planificación a otro de una forma sencilla.

-   El usuario debe poder gestionar estos escenarios de planificación
    (crearlos, cargarlos de nuevo y eliminarlos).

-   Gestionar las escuelas (CRUD), así como las aulas de cada una de
    ellas, y sus instructores.

-   Gestión CRUD de las vacaciones, bajas, etc..., que tienen los
    instructores.

-   Gestión CRUD de festivos u otras circunstancias que puedan afectar a
    la disponibilidad de las aulas.

-   Las tareas se deben codificar por colores. Es decir, cada tarea
    tiene un color específico según el tipo de tarea sea y a la marca
    que pertenezca. La codificación por colores a emplear debe ser la
    misma que la que ya se emplea en el Excel de planificación.

-   Debe reportar estadísticas, para fechas seleccionables, que muestre
    información como:

    -   Días de impartición por instructor.

    -   Días de impartición fuera de ciudad por instructor.

    -   Días de preparación de proyectos.

    -   Relación preparación/días de impartición.

    -   Listados de cursos impartidos por instructor.

    -   Grado de auto suficiencia de cada escuela (que porcentaje de
        cursos se ha impartido por instructores pertenecientes a esa
        escuela).

    -   Grado de utilización (días de curso respecto a días laborables).

-   Es interesante que el listado de tareas permita un sistema de
    búsqueda rápida y exportación de datos.

-   Los usuarios Instructores pueden visionar la planificación
    *Oficial*.

-   Los usuarios Responsables pueden visionar todos los escenarios de
    planificación disponibles.

-   Los usuarios Instructores y Responsables pueden hacer propuestas de
    modificación de escenarios.

-   El usuario SuperAdmin tiene la gestión CRUD de usuarios.

## Diagrama de casos de uso

A continuación se muestra un diagrama de casos de uso general del
aplicativo.

**Diagrama de casos de uso de Administrador:**

![CasoUso01](/proyecto-daw-docs/media/image11.jpeg)

*Figura 10 - Diagrama de casos de uso de Administrador*

**Diagrama de casos de uso de Responsable e Instructor:**

![CasoUso02](/proyecto-daw-docs/media/image12.jpeg)

*Figura 11 - Diagrama de casos de uso de Responsable e Instructor*

**Diagrama de casos de uso de SuperAdmin:**]{.underline}**

![CasoUso03](/proyecto-daw-docs/media/image13.jpeg)

*Figura 12 - Diagrama de casos de uso de super administrador*

### Documentación de actores

| Actor      | Funciones |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Administrador      | Gestionar escenarios de planificación -- El administrador podrá crear, editar y eliminar los escenarios de cada planificación. |
| Instructor         | Visualizar el escenario Oficial y enviar propuestas de modificación. |
| Responsable        | Visualizar todos los escenarios y enviar propuestas de modificación. |
| Superadministrador | Además de las funciones del *Administrador* y *Responsable*. Puede gestionar los usuarios de la aplicación.|
