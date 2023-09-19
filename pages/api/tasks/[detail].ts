import { NextApiRequest, NextApiResponse } from "next";
import { data } from "@/components/Data";
export default function Detail(req: NextApiRequest, res: NextApiResponse) {
  const { detail } = req.query;
  if (req.method === "GET") {
    let findTask = data.find((task) => `${task.id}` === detail);
    res.status(200).json(findTask);
  } else if (req.method === "DELETE") {
    let findTask = data.find((task) => `${task.id}` === detail);
    let findIndex = data.findIndex((task) => `${task.id}` === detail);
    data.splice(findIndex, 1);
    res.status(200).json(findTask);
  } else if (req.method === "PUT") {
    let findTask = data.find((task) => `${task.id}` === detail);
    if(findTask){
        findTask.id=req.body.id;
        findTask.title=req.body.title;
        findTask.description=req.body.description;
        findTask.status=req.body.status;
        res.status(201).json(findTask)
    }
  }
}
