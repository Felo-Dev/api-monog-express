# api-monog-express
## Proyecto Notas API

Este proyecto es una API para crear, leer, actualizar y eliminar notas, desarrollado con Node.js, Express y MongoDB. Esta aplicación permite a los usuarios gestionar sus notas de manera sencilla y eficiente.

### Contenidos

- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas](#rutas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

### Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs en Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar las notas.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
Router (task.routes.js)

    GET /: Renderiza la lista de tareas.
    POST /tasks/add: Crea una nueva tarea.
    GET /edit/:id: Renderiza el formulario de edición de una tarea específica.
    POST /edit/:id: Edita una tarea existente.
    GET /delete/:id: Elimina una tarea por su ID.
    GET /toggleDone/:id: Cambia el estado de completado de una tarea.

Controlador (task.controllers.js)

    renderTask: Obtiene todas las tareas de la base de datos y las renderiza en la vista principal.
    createTask: Crea y guarda una nueva tarea en la base de datos.
    renderTaskEdit: Obtiene una tarea específica para su edición y la renderiza.
    editTask: Actualiza una tarea existente en la base de datos.
    deleteTask: Elimina una tarea específica de la base de datos.
    taskToggleDone: Alterna el estado de completado de una tarea y guarda el cambio.


