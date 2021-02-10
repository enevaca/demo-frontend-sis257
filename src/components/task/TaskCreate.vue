<template>
  <div class="pt-2">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/tasks">Tareas</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
        <div class="col-12">
          <h2 class="text-center">Crear Nueva Tarea</h2>
        </div>
      </div>

    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="sendTask">
              <div class="form-group">
                <label for="id_tipo_tarea">Tipo de Tarea</label>
                <select
                  v-model="task.id_tipo_tarea"
                  id="id_tipo_tarea"
                  class="form-control"
                >
                  <option
                    v-for="tipo in tipoTareas"
                    :value="tipo.id"
                    :key="tipo.id"
                  >
                    {{ tipo.descripcion }}
                  </option>
                </select>
              </div>
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
              <template v-if="taskToEdit === 0">
                <button class="btn btn-primary btn-block">Enviar</button>
              </template>
              <template v-else>
                <button class="btn btn-primary btn-block">Editar</button>
              </template>
            </form>
          </div>
        </div>
      </div>
    </div>
    <button type="button" @click="goBack()" class="btn btn-link">
      <i class='bx bx-left-arrow-alt'></i> Volver
    </button>
  </div>
</template>

<script>
import TasksDataService from "../../services/TaskDataService";
import TypeTaskDataService from "../../services/TypeTaskDataService";

export default {
  data() {
    return {
      task: {
        nombre: "",
        descripcion: "",
        id_tipo_tarea: 0
      },
      taskToEdit: 0,
      tipoTareas: []
    };
  },
  created() {
    this.$emit("showParent", false);
    this.getTypeTasks();
  },
  methods: {
    sendTask() {
      if (this.taskToEdit === 0) {
        TasksDataService.create(this.task).then(() => {
          this.$router.push("/tasks")
        });
      } else {
        TasksDataService.update(this.taskToEdit, this.task).then(() => {
          this.$router.push("/tasks")
        });
      }
      this.task.nombre = "";
      this.task.descripcion = "";
      this.task.id_tipo_tarea = 0;
    },
    getTypeTasks() {
      TypeTaskDataService.getAll().then(response => {
        this.tipoTareas = response.data;
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
