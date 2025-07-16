import { Hono } from "hono";
import { contextStorage } from "hono/context-storage";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";
import { testConnection } from "./db";
import routes from "./routes";
import type { Env } from "./lib/type";

const app = new Hono<Env>({
  strict: false,
});

app.use(contextStorage());
app.use(logger());
app.use(cors({ origin: "*" }));
app.use(csrf());
app.use("*", requestId());
app.use(secureHeaders());

routes.forEach((route) => {
  app.basePath("/api").route("/", route);
});

// 애플리케이션 시작 시 데이터베이스 연결 테스트
console.log("🚀 Hono 서버를 시작하는 중...");
testConnection();

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
