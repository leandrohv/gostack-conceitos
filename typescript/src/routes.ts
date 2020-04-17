import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "leandrohilariovenancio@gmail.com",
    password: "1234",
    techs: [
      "NodeJS", 
      "React Native", 
      { title: "Javascript", experience: 100 }],
  });

  return response.json({ message: "helloWorld" });
}
