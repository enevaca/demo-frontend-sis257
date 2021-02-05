<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="sendTask">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="task.nombre"
                    placeholder="Inserta una tarea"
                    class="form-control"
                  />
                </div>
                <div class="form-group pt-1">
                  <textarea
                    cols="30"
                    rows="10"
                    v-model="task.descripcion"
                    placeholder="Inserta una descripción"
                    class="form-control"
                  >
                  </textarea>
                </div>
                <template v-if="edit === false">
                  <button class="btn btn-primary btn-block">Enviar</button>
                </template>
                <template v-else>
                  <button class="btn btn-primary btn-block">Editar</button>
                </template>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <router-link to="/task-new/0">Crear Nuevo</router-link>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.nombre }}</td>
                <td>{{ task.descripcion }}</td>
                <td>
                  <button @click="editTask(task.id)" class="btn btn-primary">
                    Editar
                  </button>
                  <button @click="deleteTask(task.id)" class="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TasksDataService from "../services/TaskDataService";

export default {
  data() {
    return {
      task: {
        nombre: "",
        descripcion: ""
      },
      tasks: [],
      edit: false,
      taskToEdit: 0
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    sendTask() {
      if (this.edit === false) {
        TasksDataService.create(this.task).then(() => {
          this.getTasks();
        });
      } else {
        TasksDataService.update(this.taskToEdit, this.task).then(() => {
          this.getTasks();
        });
      }
      this.edit = false;
      this.task.nombre = "";
      this.task.descripcion = "";
    },
    getTasks() {
      TasksDataService.getAll().then(response => {
        this.tasks = response.data;
      });
    },
    editTask(id) {
      TasksDataService.get(id).then(response => {
        this.task.nombre = response.data.nombre;
        this.task.descripcion = response.data.descripcion;
        this.taskToEdit = response.data.id;
        this.edit = true;
      });
    },
    deleteTask(id) {
      TasksDataService.delete(id).then(() => {
        this.getTasks();
      });
    }
  }
};
</script>
