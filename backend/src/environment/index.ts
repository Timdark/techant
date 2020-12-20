import * as dotenv from "dotenv";
dotenv.config();

export const DEVELOPMENT = "development";
export const PRODUCTION = "production";

export const BACKEND_HOST = process.env.BACKEND_HOST || "http://localhost";
export const BACKEND_PORT = process.env.BACKEND_PORT || 3050;

export const FRONTEND_HOST = process.env.FRONTEND_HOST || "http://localhost";
export const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;

export const NODE_ENV = process.env.NODE_ENV || DEVELOPMENT;
