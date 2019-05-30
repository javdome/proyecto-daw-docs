# Codificación

A continuación se desarrolla las partes del aplicativo que considero más
interesantes desde el punto de vista de la codificación: El planificador
y la gestión de escenarios de planificaciones

## Planificador

Respecto a la codificación, el planificador es la parte que más tiempo
ha consumido.

![Planificador01](/media/image23.jpeg)

*Figura 22 - Vista del planificador*

El proceso de desarrollo del planificador ha constado de:

**1.  Configuración de las opciones de ambas líneas de tiempo.**

Como se puede observar en la documentación oficial
(http://visjs.org/docs/timeline/) existen multitud de opciones de
configuración. Esta configuración se realiza mediante un objeto
*Options* que posteriormente se cargará en el objeto *Timeline*. Entre
las opciones empleadas están:

-   Items editables.

-   Multiselección de ítems.

-   Tooltips activos.

-   Escala de la línea de tiempo en días.

-   Zoom máximo y mínimo.

Para el eje vertical, cada uno de los elementos (los instructores en
el Timeline superior, y las aulas para el Timeline inferior) se
precargan mediante un template de forma que cada elemento tenga su
funcionalidad. Esto permite que cada instructor y cada aula se pueda
ocultar, o que lo instructores incorporen sus "badgets" informativos.

**2.  Creación de los DataSet para cada uno de los Timelines.**

Además de las opciones, cada objeto Timeline se debe cargar con sus
ítems. Para ello se crean primeramente un objeto DataSet mediante un
array de objetos. Los DataSet, pertenecen a la librería Vis, y se
podría decir que son unos arrays "vitaminados" que incorporan sus
propios métodos y eventos (http://visjs.org/docs/data/dataset.html).

La siguiente figura ilustra la procedencia de los datos de ambos
DataSet.

![DataSet](/media/image24.jpeg)

*Figura 23 - Creación de los DataSet de instructores y aulas*

Es importante resaltar que una tarea concreta representada en ambas
Timeline, al venir de la misma fuente de datos, tienen el mismo
identificador. De esta forma podemos relacionar los ítems entre ambas
Timelines.

**3.  Creación de las Timeline.**

Una vez tenemos los objetos *Options* y los *DataSets* se pueden crear
los Timelines:
``` js
var Timeline_1 = new vis.Timeline( container_1 , DataSet_1 , groups_1 , options_1 );

var Timeline_2 = new vis.Timeline( container_2 , DataSet_2 , groups_2 , options_2 );
```
::: warning NOTA
*container* son los elementos "div" y los *groups* son los
elementos del eje vertical (instructores y aulas, respectivamente).
:::

Para sincronizar el movimiento de ambas Timelines se emplea el evento
*rangechange* y el método *setWindow*, disponibles en los objetos
Timeline.

``` js
Timeline_2.on('rangechange', function () {
    onrangechange2();
});

Timeline_1.on('rangechange', function () {
    onrangechange1();
});

function onrangechange1() {
    var range = Timeline_1.getWindow();
    Timeline_2.setWindow(range.start, range.end, {animation: false});
}

function onrangechange2() {
    var range = Timeline_2.getWindow();
    Timeline_1.setWindow(range.start, range.end, {animation: false});
}
```

**4.  Sincronización de las tareas entre los dos Timelines**

Respecto a la codificación, lo más complejo ha sido sincronizar los
movimientos de las tareas (ítems) de la líneas de tiempo entre sí, así
como el hecho de añadir o quitar el icono del maletín que indica que
el instructor está fuera de zona.

Como se ha comentado, ambas líneas de tiempo son instancias
independientes ( Timeline_1 y Timeline_2 ), y cada una de ellas se
carga con sus tareas ( DataSet_1 y DataSet_2 ).

Para la sincronización de las tareas, cada vez que se produce una
modificación en alguna de ellas (p.j. en DataSet_1), se genera un
evento. Este evento es "cazado" y se actualiza la tarea
correspondiente de la otra línea de tiempo (p.j. DataSet_2).
Recordemos que el id de la tarea es el mismo en ambos DataSet.

Este proceso también debe ocurrir en sentido contrario, es decir, si
se modifica DataSet_2, se debe actualizar DataSet_1.

![SincronizacionItems](/media/image25.jpeg)

*Figura 24 - Proceso de sincronización de Items entre ambas Timeline*

Todo este proceso generó los siguientes problemas que se tuvieron que
solucionar:

Un problema es el bucle que se muestra en la imagen, es decir, si se
modifica DataSet_1, se actualiza DataSet_2. Esto genera que se
actualice DataSet_1 y, así, sucesivamente.

Para solucionar este problema, cuando se realiza la actualización del
DataSet opuesto, se debe desactivar su listener, realizar su
actualización, y, a continuación, volver a activar el listener.

Sin embargo, aun desactivando el listener del DataSet opuesto, seguía
teniendo problemas generados por bucles en la codificación. Estos eran
debidos a que cuando se realiza una modificación de una tarea, el
icono de la maleta siempre es actualizado en el mismo DataSet. Por lo
que se generaba un nuevo evento, que volvía a generar un bucle dentro
del mismo DataSet.

Para solucionar esto, no solo se debe desactivar el listener del
DataSet opuesto, sino también el listener del mismo DataSet de donde
se está realizando la modificación. Al igual que antes, al finalizar
la actualización de la tarea, se debe reactivar el listener.

También este apartado de planificación he requerido de un tiempo de
codificación en el backend. Las partes más destacables al respecto han
sido, por un lado, la adaptación de los datos de la base de datos al
formato requerido para crear los itemSet que se van a cargar en las
líneas de tiempo. Así como la fase de almacenaje de datos, en este
caso los datos son enviados vía Ajax al servidor y se han de volver a
transformar para que sean guardados.

``` js
// Funciones de sincronización de tareas (ítems)

var modif_Item = function ( argumentos ) {
    DataSet_2.off ( 'update' , modifItem2 );
    DataSet_1.off ( 'update' , modifItem );

    ......
    Lógica de actualización de maleta en DataSet_1
    Lógica de actualización de item en DataSet_2
    ......

    DataSet_2.on ( 'update' , modifItem2 );
    DataSet_1.on ( 'update' , modifItem );
}

var modif_Item2 = function ( argumentos ) {
    DataSet_1.off ( 'update' , modifItem );
    DataSet_2.off ( 'update' , modifItem2 );

    ......
    Lógica de actualización de maleta en DataSet_2
    Lógica de actualización de item en DataSet_1
    ......

    DataSet_1.on ( 'update' , modifItem );
    DataSet_2.on ( 'update' , modifItem2 );

}

// Activación de listeners en DataSets
DataSet_1.on ( 'update',modifItem );
DataSet_2.on( 'update',modifItem2 );

```

## Gestión de escenarios de planificación

En un escenario de planificación se engloban todos los datos que se
representan en el planificador, es decir: Tareas, Vacaciones, Festivos,
Instructores, Aulas y Escuelas.

Para la gestión de escenarios de planificación, se ha creado un sistema
que guarda (o carga) todos estos datos entre la base de datos y ficheros
*json*.

Cada fichero es un escenario distinto, mientras que el escenario que
está en la Base de datos es el *Escenario activo*, es decir, es el que
se puede modificar en el planificador.

Cuando se quiere cambiar de escenario, los datos de la base de datos se
guardan en el fichero correspondiente, luego se vacían las tablas, y se
pasan los datos del archivo del escenario que se quiere cargar a la base
de datos.

## Seguridad

A continuación se describen algunos sistemas de seguridad implantados en
el aplicativo:

**1.  Autentificación**

Laravel incorpora todo un sistema de autentificación fácilmente
integrable. Para su creación simplemente se debe emplear el comando
*php artisan make:auth*.

**2.  Autorización**

En el aplicativo se han creado diferentes perfiles de usuario
(instructor, responsable, administrador y superadmisnistrador) cada
uno de ellos con sus propios permisos.

Para su desarrollo, se creado la columna *rol* en la tabla *users* y
un método para la verificación del rol en el modelo *User*. Además, se
han creado diferentes *Gates* que protegen las rutas para que no se
puedan acceder a áreas restringidas, ni realizar operaciones
peligrosas con la base de datos. Los *Gates* son el sistema de
autorización proporcionado por Laravel
(https://laravel.com/docs/authorization).

**3.  Validaciones**

Los formularios que realizan operaciones en la base de datos también
son validados en el servidor. Para su desarrollo, Laravel incorpora
una amplia variedad de métodos de validación
(https://laravel.com/docs/validation).

**4.  Transacciones en la Base de datos**

Para las acciones de borrado y guardado masivo de datos en el
servidor, se ha empleado un sistema de transacciones dentro de un
try-catch.

De esta forma, si se procede a un vaciado de datos de la tabla para su
posterior llenado, en caso de suceder algún error, se realiza un
rollback de toda la operación.

``` php
DB::beginTransaction();

try {

    ......
    OPERACIONES EN BASE DE DATOS
    ......

    DB::commit();
    return "OK";

} catch (\Exception $e) {
    $error = $e->getMessage();
    DB::rollback();
    return $error
}
```

**5.  Backups de datos**

En el servidor se ha creado un cron que realiza un guardado diario de
los datos (tanto de la base de datos, como de los archivos de los
escenarios).

Para su desarrollo se ha creado un comando Artisan que realiza esta
función de backup. A continuación, se programa la ejecución del
comando en el Scheduler de Laravel. Y por último, se crea el cron en
el servidor.
