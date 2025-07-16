import { Hono } from "hono";
import { auth } from "@/lib/auth";
import type { Env } from "@/lib/type";

const authRouter = new Hono<Env>({
  strict: false,
});

authRouter.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export { authRouter };
