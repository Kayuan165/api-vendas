import { response, Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
  return response.json({ message: 'Hello Dev' });
});

export default routes;
