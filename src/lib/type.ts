import type { AuthType } from "./auth";
import type { RequestIdVariables } from "hono/request-id";

export type Env = {
  Bindings: AuthType;
  Variables: AuthType &
    RequestIdVariables & {
      test: string;
    };
};
