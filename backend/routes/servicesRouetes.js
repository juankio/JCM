// routes/servicesRoutes.js
import express from "express";
import { getServices, createServis, getServiceById, updateService, deleteService } from '../controllers/servicesController.js';
import { valideObjetId } from '../utils/index.js';

const router = express.Router();

router.route('/')
  .post(createServis)
  .get(getServices);

router.route('/:id')
  .get(valideObjetId, getServiceById)
  .put(valideObjetId, updateService)
  .delete(valideObjetId, deleteService);

export default router;
