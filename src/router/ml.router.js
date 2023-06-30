import { Router } from "express";
import { testingSave, leerDatosDeJSON } from "../controller/ml.controller.js";

const router = Router();

router.post('/predict', testingSave);

router.get('/datos', (req, res) => {
  const rutaArchivo = 'datos.json';
  leerDatosDeJSON(rutaArchivo);
});

export default router;