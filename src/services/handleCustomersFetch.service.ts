import { IData, INewData } from "../models/IData";
import { get, post, put, axiosDelete } from "./handleAxiosRequests.service";
import env from "react-dotenv";

export async function fetchData(): Promise<IData[]> {
  const response: string = `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles`;
  return (await get<IData[]>(response)).data;
}
export async function fetchItem(id: string): Promise<IData> {
  const response: string =
    `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/` + id;
  return (await get<IData>(response)).data;
}

export async function postItem(item: INewData): Promise<IData> {
  const response: string = `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles`;
  return (await post<IData, INewData>(response, item)).data;
}

export async function deleteItem(id: string): Promise<IData> {
  const response: string =
    `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/` + id;
  return (await axiosDelete<IData>(response)).data;
}

export async function editItem(item: INewData, id: string): Promise<IData> {
  const response: string =
    `http://ec2-3-249-202-253.eu-west-1.compute.amazonaws.com/articles/` + id;
  return (await put<IData, INewData>(response, item)).data;
}
