import http from "../http-common";

class TypeTaskDataService {
  getAll() {
    return http.get("/type_tasks");
  }

  get(id) {
    return http.get(`/type_tasks/${id}`);
  }

  create(data) {
    return http.post("/type_tasks", data);
  }

  update(id, data) {
    return http.put(`/type_tasks/${id}`, data);
  }

  delete(id) {
    return http.delete(`/type_tasks/${id}`);
  }

  deleteAll() {
    return http.delete(`/type_tasks`);
  }
}

export default new TypeTaskDataService();
