import { NextApiRequest, NextApiResponse } from "next";
import { data } from "@/components/Data";
export default function Detail(req: NextApiRequest, res: NextApiResponse) {
  const { detail } = req.query;

  let findTask = data.find((task) => `${task.id}` === detail);
  if (req.method === "DELETE") {
    let findIndex = data.findIndex((task) => `${task.id}` === detail);
    if (findIndex !== -1) {
      data.splice(findIndex, 1);
      res.status(200).json(findTask);
    } else {
      res.status(200).json(data);
    }
  } else if (req.method === "PUT") {
    if (findTask) {
      findTask.title = req.body.title;
      findTask.description = req.body.description;
      findTask.status = req.body.status;
      res.status(201).json(findTask);
    } else {
      res.status(200).json(data);
    }
  } else {
    res.status(200).json(findTask);
  }
}
