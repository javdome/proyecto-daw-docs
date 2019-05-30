# Anexos

## Diseño Lógico y Físico de la base de datos

**ESCUELA** ([ID_escuela], Nombre_Ciudad)

CP: { ID_escuela }

Calt: { Nombre_Ciudad }

*CREATE TABLE escuelas (*

*Id_escuela INT AUTO_INCREMENT,*

*Nombre_Ciudad VARCHAR (60) NOT NULL,*

*constraint esc_id_pk PRIMARY KEY (Id_escuela),*

*constraint esc_nom_un UNIQUE (Nombre_Ciudad) );*

**AULA** ([ID_aula], Nombre_Aula, ID_escuela∆)

CP: { ID_aula }

Calt: { Nombre_Aula }

Caj: { ID_escuela∆ } → ESCUELA

*CREATE TABLE aulas (*

*Id_aula INT AUTO_INCREMENT,*

*Nombre_Aula VARCHAR (60) NOT NULL,*

*constraint esc_id_pk PRIMARY KEY (Id_escuela),*

*constraint esc_nom_un UNIQUE (Nombre_Aula) );*

**INSTRUCTOR** ([ID_instructor], Nombre_Instructor,
ID_escuela∆)

CP: { ID_instructor }

Calt: { Nombre_Instructor }

Caj: { ID_escuela∆ } → ESCUELA

*CREATE TABLE instructores (*

*Id_instructor INT AUTO_INCREMENT,*

*Nombre_Instructor VARCHAR (255) NOT NULL,*

*Id_escuela INT NOT NULL,*

*constraint ins_id_pk PRIMARY KEY (Id_instructor),*

*constraint ins_nom_un UNIQUE (Nombre_Instructor),*

*constraint ins_id_fk FOREIGN KEY (Id_escuela) REFERENCES escuelas
(Id_escuela) ON DELETE CASCADE );*

**FESTIVOS** ([ID_festivo], Nombre_Fiesta,
Festivo_inicio, Festivo_fin, ID_aula∆*)

CP: { ID_festivo }

Caj: { ID_aula∆ } → AULA

*CREATE TABLE festivos (*

*Id_festivo INT AUTO_INCREMENT,*

*Nombre_Fiesta VARCHAR (255),*

*Festivo_inicio DATE NOT NULL,*

*Festivo_fin DATE NOT NULL,*

*Id_aula INT,*

*constraint fes_id_pk PRIMARY KEY (Id_festivo),*

*constraint fes_id_fk FOREIGN KEY (Id_aula) REFERENCES aulas
(Id_aula) ON DELETE CASCADE );*

**VACACIONES** ([ID_vacacion], Nombre_vacacion,
Vacacion_inicio, Vacacion_fin, ID_instructor∆*)

CP: { ID_vacacion }

Caj: { ID_instructor∆ } → AULA

*CREATE TABLE vacaciones (*

*Id_vacacion* *INT AUTO_INCREMENT,*

*Nombre_vacacion VARCHAR (255),*

*Vacacion_inicio DATE NOT NULL,*

*Vacacion_fin DATE NOT NULL,*

*ID_instructor INT,*

*constraint vac_id_pk PRIMARY KEY (Id_vacacion),*

*constraint vac_id_fk FOREIGN KEY (ID_instructor) REFERENCES
instructores (Id_instructor) ON DELETE CASCADE );*

**TAREAS** ([ID_tarea], Nombre_tarea, Tarea_inicio,
Tarea_fin, ID_instructor∆, ID_aula∆, Color, Comentarios)

CP: { ID_tarea }

Caj: { ID_aula∆ } → AULA

Caj: { ID_ instructor ∆ } → INSTRUCTOR

*CREATE TABLE tareas (*

*Id_tarea INT AUTO_INCREMENT,*

*Nombre_tarea VARCHAR (255),*

*Tarea_inicio DATE NOT NULL,*

*Tarea_fin DATE NOT NULL,*

*Id_aula INT NOT NULL,*

*Id_instructor INT NOT NULL,*

*Color VARCHAR (50) DEFAULT 'normal',*

*Comentarios TEXT,*

*constraint cur_id_pk PRIMARY KEY (Id_tarea),*

*constraint cur_idesc_fk FOREIGN KEY (Id_aula) REFERENCES aulas
(Id_aula) ON DELETE CASCADE,*

*constraint cur_idins_fk FOREIGN KEY (Id_instructor) REFERENCES
instructores (Id_instructor) ON DELETE CASCADE );*

## Notas creadas durante la evolución del aplicativo

**v1.8.4**

-   Se soluciona Bug que hacía aparecer NaN en las IC totales.

-   Se modifican los badgets de los instructores en el planificador.

-   Se añade modifica el punto de seguridad en el proceso de guardado
    del planificador que se añadió en la v1.8.3

-   En el servidor, en ".env" se pasa el debug a false.

**v1.8.3**

-   Se activa Laravel Mix.

-   Se añade un punto más de seguridad en el proceso de guardado del
    planificador.

-   Se crea Schedule que envía un mail cada noche con un Zip de todos
    los json de los escenarios (¡ojo!, hay que crear el cron en el
    servidor).

**v1.8.0**

-   Se añade rol "Responsable"

-   Se permite que los "responsable" puedan visionar cualquier
    escenario.

-   Se añaden nuevas abreviaturas de tareas (TF y TP). Además, las RI
    dejan de ser ítems de "sombreado" y pasan a ser items editables
    (pasan de tabla "actividades" a tabla "curso").

-   Se añade función de "Propuesta de modificación": los "instructores"
    y "responsables" pueden editar su vista de la planificación. Los
    cambios que se realicen, son enviados por mail al "administrador"
    para que verifique y los valide.

-   Se introduce Laravel-Mix en mi workflow de desarrollo.

**v1.7.0**

-   Se añade sistema de autorización al aplicativo. Se pueden crear
    usuarios con diferentes perfiles ("Instructor", "Administrador" y
    "Super Administrador".

-   Se crea apartado de gestión de usuarios para el "Super
    Administrador".

-   Se crea apartado que permite ver la planificación del escenario
    "Oficial". Este apartado está disponible para los perfiles
    "Instructor" y "Super Administrador".

**v1.5.0**

-   Se modifica el sistema de guardado de planificaciones por un sistema
    de escenarios.

-   Se muestra el nombre del escenario activo en el Header de la
    aplicación.

-   Se añade la opción del paso de datos al escenario "Oficial".

**v1.3.0**

-   Se actualiza módulo de Timeline a 2.2.4

-   Se añaden badgets con los IC y ICP de cada instructor, en el
    planificador, y se actualizan en tiempo real.

-   Se añade badget con los IC Totales de todos los instructores, en el
    planificador, y se actualiza en tiempo real.

**v1.1.1**

-   Modificaciones internas:

-   Se añaden las relaciones en los modelos.

-   Se modifica la extracción de datos, y se crea una clase con métodos
    estáticos para hacer las transformaciones a formato vis/Timeline.

-   Se simplifica la lógica del javascript para el planificador.

**v1.1.0**

-   Se añade vista de impresión en el planificador.

**v1.0.1**

-   Se cambia el orden de "cambiar password" y "login".

**v1.0.0**

-   Corrección de bugs.

-   Se puede filtrar en el listado de ítems.

-   Se pueden exportar los ítems a formato Excel.

-   Se limita el Zoom máximo y mínimo a 13 y 1 semanas respectivamente.

-   Se mejora el rendimiento de la línea de tiempo.

-   El usuario registrado puede modificar su Password.

**v0.9.0**

-   Corrección de bugs.

-   Se añade la gestión VA, RI, DC,...

**v0.7.0**

-   Corrección de bugs.

-   Mejora de seguridad de datos (funcionamiento de Rollbacks y
    Transacciones en el guardado de datos del planificador).

-   Mejora en pantalla de inicio (se crea scroll al desplegar algún
    menú).

-   Se crea opción de borrado completo de las tablas de Festivos y
    Cursos (con ventana de confirmación).

-   Mejora en estadísticas del cálculo del porcentaje de uso de las
    escuelas.

-   Creación de mensajes de feedback en la "gestión de versiones".

-   Se introducen modales de confirmación en acciones peligrosas en
    apartado "gestión de versiones".

-   Nombres de fechas en Timeline y Datepicker en castellano.

**v0.5.0**

-   Corrección de bugs.

-   Nuevo apartado de estadísticas.

-   Se introduce apartado con listado de ítems.

-   Diseño y maquetación.

**v0.1.1**

-   Corrección de bugs.

-   Se arregla problema que no permitía cambiar la escuela en la gestión
    de Aulas e Instructores.

-   Nueva funcionalidad: Se pueden grabar, cargar y borrar diferentes
    versiones de la planificación a través del apartado "Gestión de
    versiones".

-   Nueva funcionalidad: Se pueden ocultar/mostrar los Instructores y
    Aulas de ambas líneas de tiempo para facilitar la vista global.

-   Algunas modificaciones en los colores de los ítems.

**v0.1.0**

-   Se realiza una reestructuración importante del proyecto.

-   Corrección de bugs.

-   En el timeline superior se pueden introducir rangos de días con
    sombreado de colores. Estos se pueden añadir desde la vista del
    planificador y de momento reciben el nombre de actividades.

-   El timeline inferior se realiza respecto a aulas, en vez de por
    escuelas.

-   Se pueden añadir ítems que no requieren de un aula.

-   El campo observaciones se sustituye por el de abreviaturas.

-   Según abreviatura se le puede asociar una marca. Según combinación
    de estos dos campos, los ítems tienen un color específico.

-   Los días festivos (que afectan al timeline de aulas) se pueden
    añadir desde la vista del planificador.

-   Se introduce gestión de Aulas.

**v0.0.3**

-   Corrección de bugs.

-   Se añade mensaje indicando si la grabación de los cursos de las
    líneas de tiempo se ha realizado con éxito o ha habido algún error.

-   Se añade icono de cargando en la página de planificación.

-   Al grabar los ítems en la bbdd, si se produce un error durante la
    grabación, se revierten los cambios y se muestra mensaje al usuario.

-   Se añade una validación básica (en lado cliente) en el formulario de
    añadir un nuevo elemento al timeline.

-   En el timeline de instructores, cuando se imparte un curso fuera de
    zona, se le incluye un icono de un maletín.

-   En el timeline de escuelas, cuando se imparte un curso por un
    instructor de otra zona, se le incluye un icono de un maletín.

**v0.0.2**

-   Corrección de Bugs.

-   Multiselección por escuela o instructor: Mediante la combinación
    "Shift+click" se realiza una multiselección de elementos que hay
    entre las fechas de ambos elementos, y que pertenezcan a ese
    instructor o escuela.

-   Se incluye la gestión de Escuelas.

-   Se incluye la gestión de Instructores.

-   Se incluye la gestión de los Festivos.

-   Se incluye sistema de autentificación.

-   Se incluye validación de campos (en lado servidor) de las partes de
    gestión de Escuelas, Instructores y Festivos.
