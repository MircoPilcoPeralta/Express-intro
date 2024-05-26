import { Request, Response } from "express";
import { checkHealthy } from "../services/healthy/healthy";
import { ApiResponse } from "../model/vo/ApiResponse";

export const getHealthy = (request: Request, response: Response) => {
  const data = checkHealthy();

  const apiResponse: ApiResponse = {
    data,
    message: "OK",
    status: 200,
  };

  return response.json(apiResponse);
};
