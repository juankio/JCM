import api from "@/lib/axios";

export default {
  all() {
    return api.get('/comentarios');
  },
  create(data) {
    return api.post('/comentarios', data);
  },
  getById(id) {
    return api.get(`/comentarios/${id}`);
  }
};
