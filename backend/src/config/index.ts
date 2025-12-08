import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const envConfig = {
  app: {
    port: process.env.PORT ? Number(process.env.PORT) : 5000,
    env: process.env.NODE_ENV as "development" | "production",
    name: process.env.APP_NAME || "Smart Mess Management",
  },
  clients: {
    admin_dev: process.env.ADMIN_CLIENT_URL_DEV as string,
    admin_prod: process.env.ADMIN_CLIENT_URL_PROD as string,
    public_dev: process.env.PUBLIC_CLIENT_URL_DEV as string,
    public_prod: process.env.PUBLIC_CLIENT_URL_PROD as string,
  },
  cors_origins: process.env.CORS_ORIGINS
    ? (process.env.CORS_ORIGINS as string).split(", ")
    : [],
  database: {
    mongodb_url: process.env.MONGODB_URL as string,
  },
  jwt: {
    access_token_expires: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
    refresh_token_expires: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
    secret: process.env.JWT_SECRET as string,
    access_cookie_name:
      process.env.ACCESS_TOKEN_COOKIE_NAME || "myapp_auth_access_token",
    refresh_cookie_name:
      process.env.REFRESH_TOKEN_COOKIE_NAME || "myapp_auth_refresh_token",
  },
  email: {
    host: process.env.MAIL_HOST as string,
    port: Number(process.env.MAIL_PORT) as number,
    user: process.env.MAIL_USER as string,
    pass: process.env.MAIL_PASS as string,
  },
 
};
