import { NextApiRequest, NextApiResponse } from "next";
import Cookies from "js-cookie";
type tasksType={
    id:number,
    title:string,
    description:string,
    status:boolean
}

// tasks bayad biroon tabe bashad
const tasks:tasksType[]=[];
export default function MyApi(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "GET") {
    res.status(200).json(tasks);
  }else if(req.method==="POST"){
    let getTask=req.body;
    let newTask={
        id:tasks.length+1,
        title:getTask.title,
        description:getTask.description,
        status:false
    }
    tasks.push(newTask);
    res.status(201).json(tasks)

  }
}
