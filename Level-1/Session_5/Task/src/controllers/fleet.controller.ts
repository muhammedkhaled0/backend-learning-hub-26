import { Request,Response } from "express"
import { fleet } from "../data/seed.data"
import { Microbus } from "../types/microbus.type"
export const getFleet=(req:Request,res:Response)=>{
    res.status(200).json({
        success:true,
        message:"Fleet retrieved successfully",
        fleet:fleet
    })
}
export const getMicrobus =(req:Request,res:Response)=>{
    const id =Number(req.params.id);
    let index=undefined
    for(let i=0;i<fleet.length;i++){
        if(fleet[i].id===id){
            index=i;
            break;
        }
    }
    if(index==undefined){
        return res.status(404).json({
            success:false,
            message:"Microbus not found",
        })
    }
    else {
        res.status(200).json({
            success:true,
            messsage:"Microbus retrieved successfully",
            microbus:fleet[index]
        })
    }
}
export const createMicrobus=(req:Request,res:Response)=>{
    const newMicrobus:Microbus={
        id:fleet.length,
        ...req.body,
        ratings:[]
    }
    fleet.push(newMicrobus);
    res.status(201).json(newMicrobus);
}
export const updateMicrobus=(req:Request,res:Response)=>{
        const id = Number(req.params.id);
           let index=undefined
    for(let i=0;i<fleet.length;i++){
        if(fleet[i].id===id){
            index=i;
            break;
        }
    }
    if(index==undefined){
        return res.status(404).json({
            success:false,
            message:"Microbus not found",
        })
    }
    else{
        const microbus=fleet[index]
        const updatedBus:Microbus = {
            ...microbus,
            ...req.body,
        };
        fleet[index]=updatedBus;
        res.status(200).json({
            success:true,
            message:"Microbus updated successfully",
            updatedBus:{...updatedBus}
    });
    }
}
export const deleteMicrobus = (req:Request, res:Response) => {

    const id = Number(req.params.id);

        let index=undefined
    for(let i=0;i<fleet.length;i++){
        if(fleet[i].id===id){
            index=i;
            break;
        }
    }

    if (index === undefined) {
        return res.status(404).json({
            message: "Microbus not found"
        });
    }

    fleet.splice(index, 1);

    res.status(200).json({
        success:true,
        message: "Microbus deleted successfully"
    });
};
export const filterFleet = (req:Request, res:Response) => {

    const maxFare = Number(req.query.maxFare);

    if (!req.query.maxFare) {
        return res.status(400).json({
            message: "maxFare is required"
        });
    }

    const result = fleet.filter(bus => bus.farePerSeat <= maxFare);
    res.status(200).json({
        success:true,
        message:"request done successfully",
        result,
});
};
export const getRating = (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const rater = req.query.rater;

    if (!rater) {
        return res.status(400).json({
            success: false,
            message: "rater is required"
        });
    }

    let index = undefined;

    for (let i = 0; i < fleet.length; i++) {
        if (fleet[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === undefined) {
        return res.status(404).json({
            success: false,
            message: "Microbus not found"
        });
    }

    const ratings = fleet[index].ratings;

    let rate = undefined;

    for (let i = 0; i < ratings.length; i++) {
        if (Object.keys(ratings[i])[0] === rater) {
            rate = ratings[i];
            break;
        }
    }

    if (rate === undefined) {
        return res.status(200).json({
            success: true,
            message: "This passenger never rated this microbus."
        });
    }

    res.status(200).json({
        success: true,
        message: "Rating retrieved successfully",
        id,
        rater,
        rate: rate[rater as string]
    });
};