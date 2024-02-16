import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// setup http server with requests handlers
export const server = setupServer(...handlers);
