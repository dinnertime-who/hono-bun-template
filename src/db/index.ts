import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schemas from "./schema";

// PostgreSQL 연결 풀 설정
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 20, // 최대 연결 수
  idleTimeoutMillis: 30000, // 유휴 연결 타임아웃
  connectionTimeoutMillis: 2000, // 연결 타임아웃
});

// Drizzle ORM 인스턴스 생성
export const db = drizzle(pool, {
  schema: { ...schemas },
});

// 연결 테스트 함수
export async function testConnection() {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    console.log("✅ PostgreSQL 연결 성공:", result.rows[0]);
    return true;
  } catch (error) {
    console.error("❌ PostgreSQL 연결 실패:", error);
    return false;
  }
}

// 애플리케이션 종료 시 연결 풀 정리
process.on("SIGINT", async () => {
  console.log("🔄 PostgreSQL 연결 풀을 정리하는 중...");
  await pool.end();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("🔄 PostgreSQL 연결 풀을 정리하는 중...");
  await pool.end();
  process.exit(0);
});
