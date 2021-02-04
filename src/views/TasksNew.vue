<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12">
          <h3>Nueva Tarea</h3>
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
    //this.getTasks();
  },
  methods: {
    sendTask() {
      if (this.edit === false) {
        TasksDataService.create(this.task).then(() => {
          this.$router.push("/tasks");
        });
      } else {
        TasksDataService.update(this.taskToEdit, this.task).then(() => {
          this.$router.push("/tasks");
        });
      }
      this.edit = false;
      this.task.nombre = "";
      this.task.descripcion = "";
    }
  }
};
</script>
