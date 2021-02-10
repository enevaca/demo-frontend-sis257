<template>
  <div class="container">
    <transition>
      <router-view @showParent="showParent" />
    </transition>

    <div v-if="showParentPage">
      <nav aria-label="breadcrumb" class="pt-2">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Tareas</li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12">
          <h2 class="text-center">Lista de Tareas</h2>
        </div>
        <div class="col">
          <router-link
            :to="{ name: 'TaskCreate', params: {} }"
            class="btn btn-link"
          >
            <i class="bx bx-plus"></i>Crear Nuevo
          </router-link>
        </div>
      </div>

      <div class="table-container">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Tarea</th>
              <th>Descripción</th>
              <th>Tipo Tarea</th>
              <th width="230"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.nombre }}</td>
              <td>{{ task.descripcion }}</td>
              <td>{{ task.tipo_tarea }}</td>
              <td>
                <button @click="editTask(task.id)" class="btn btn-link">
                  <i class="bx bx-edit"></i>Editar
                </button>
                <button @click="deleteTask(task.id)" class="btn btn-link">
                  <i class="bx bx-trash"></i>Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TasksDataService from "../../services/TaskDataService";

export default {
  data() {
    return {
      task: {
        nombre: "",
        descripcion: "",
        id_tipo_tarea: 0,
        tipo_tarea: ""
      },
      tasks: [],
      edit: false,
      taskToEdit: 0,
      showParentPage: true
    };
  },
  created() {
    this.$emit("showImg", false);
    this.getTasks();
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.showParentPage = toDepth < fromDepth;
    if (this.showParentPage) {
      this.getTasks();
    }
    next();
  },
  methods: {
    getTasks() {
      TasksDataService.getAll().then(response => {
        this.tasks = response.data;
      });
    },
    editTask(id) {
      this.$router.push("/tasks/edit/" + id);
    },
    deleteTask(id) {
      var r = confirm("Está seguro que desea eliminar el registro?");
      if (r == true) {
        TasksDataService.delete(id).then(() => {
          this.getTasks();
          alert("Tarea eliminada");
        });
      }
    },
    showParent(show) {
      this.showParentPage = show;
    }
  }
};
</script>
