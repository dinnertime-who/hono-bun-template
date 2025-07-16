import { Hono } from "hono";
import { testConnection } from "./db";
import { AuthType } from "./lib/auth";
import routes from "./routes";

const app = new Hono<{ Variables: AuthType }>({
  strict: false,
});

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
