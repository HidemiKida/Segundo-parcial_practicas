import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

const gastos = [
  { id: 1, clienteId: 1, conceptoId: 1, fecha: '2024-06-01', hora: '10:00', valorgasto: 50.0, estado: 'PASIVO' },
  { id: 2, clienteId: 2, conceptoId: 2, fecha: '2024-06-02', hora: '11:00', valorgasto: 75.0, estado: 'ACTIVO' }
];

app.get('/obtener-gasto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const gasto = gastos.find(gasto => gasto.id === id);
  if (gasto) {
    res.json(gasto);
  } else {
    res.status(404).json({ message: 'Gasto no encontrado' });
  }
});

app.get('/obtener-registro-primer-servicio/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const response = await axios.get(`http://localhost:4000/obtener-registro/${id}`);
      res.json(response.data);
    } catch (error) {
      console.error('Error al obtener registro del primer servicio:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en puerto ${PORT}`);
});