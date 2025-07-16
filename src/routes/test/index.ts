import { Hono } from "hono";
import { effectValidator } from "@hono/effect-validator";
import { Test } from "@/schemas/test";
import type { Env } from "@/lib/type";

const testRouter = new Hono<Env>();

testRouter.basePath("/test").get(
  "/", //
  effectValidator("query", Test),
  (c) => {
    const { name } = c.req.valid("query");
    return c.json({ message: `Hello ${name}` });
  }
);

export { testRouter };
