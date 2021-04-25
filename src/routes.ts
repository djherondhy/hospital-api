import { Router, Request, Response } from 'express';
import {getPaciente, getPacientes, savePaciente, updatePaciente, removePaciente} from './controller/ClientsController'

const routes = Router()

routes.get('/', (request: Request, response: Response)=>{
    return response.json({
        message: "Pacientes API"
    })
})
routes.get('/pacientes', getPacientes)
routes.get('/pacientes/:id', getPaciente)
routes.post('/pacientes', savePaciente)
routes.put('/pacientes/:id', updatePaciente)
routes.delete('/pacientes/:id', removePaciente)


export default routes;

