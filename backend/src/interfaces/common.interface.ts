import { IRoles } from "@/constants/roles";
import { Types } from "mongoose";

export type IJWtPayload = {
  id: string | Types.ObjectId;
  name: string;
  email: string;
  role: IRoles;
};

export type IChangePassword = {
  old_password: string;
  new_password: string;
};

export type ILoginCredentials = {
  credential: string;
  password: string;
};

export type IResetPassword = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  access_token: string;
  refresh_token: string;
};

 

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
