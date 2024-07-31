import api from "@/lib/axios";

export default {
  all() {
    return api.get('/coments');
  },
  create(data) {
    return api.post('/coments', data);
  },
  getById(id) {
    return api.get(`/coments/${id}`);
  }
};
