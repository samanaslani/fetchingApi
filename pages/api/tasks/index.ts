import { NextApiRequest, NextApiResponse } from "next";
import { data } from "@/components/Data";

export default function MyApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    let getTask = req.body;
    let newTask = {
      id: Date.now(),
      title: getTask.title,
      description: getTask.description,
      status: getTask.status,
    };
    data.push(newTask);
    res.status(201).json(data);
  }
}
