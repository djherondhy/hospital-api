import { getRepository } from 'typeorm'
import { Paciente } from '../entity/Paciente'
import {Request, Response} from 'express'

export const getPacientes = async (req: Request, res: Response) =>{
    const pacients = await getRepository(Paciente).find()
    return res.json(pacients)
}

export const getPaciente = async (req: Request, res: Response) =>{
    const { id } =req.params
    const pacients = await getRepository(Paciente).findOne(id)
    return res.json(pacients)
}

export const savePaciente = async(req: Request, res: Response) =>{
    const pacients = await getRepository(Paciente).save(req.body);
    return res.json(pacients)
}

export const updatePaciente = async(req: Request, res: Response) =>{
    const {id} = req.params
    const pacients = await getRepository(Paciente).update(id, req.body)

    if(pacients.affected == 1){
        const pacientsUpdate = await getRepository(Paciente).findOne(id)
        return res.json(pacientsUpdate)
    }else{
        return res.status(404).json({message: "Client not found"})
    }
}

export const removePaciente = async(req: Request, res: Response) =>{
    const {id} = req.params
    const pacients = await getRepository(Paciente).delete(id)

    if(pacients.affected == 1){
        const pacientsUpdate = await getRepository(Paciente).findOne(id)
        return res.json(pacientsUpdate)
    }else{
        return res.status(404).json({message: "Client not found"})
    }
    
}
