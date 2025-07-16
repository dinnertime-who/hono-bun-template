# Hono Bun Template with PostgreSQL

이 프로젝트는 Hono, Bun, PostgreSQL, Drizzle ORM을 사용한 웹 애플리케이션 템플릿입니다.

## 🚀 빠른 시작

### 1. 의존성 설치

```sh
bun install
```

### 2. 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 추가하세요:

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/hono_db
NODE_ENV=development
PORT=3000
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
```

### 3. PostgreSQL 실행 (Docker 사용)

```sh
# PostgreSQL 컨테이너 시작
bun run docker:up

# 로그 확인
bun run docker:logs
```

### 4. 데이터베이스 마이그레이션

```sh
# 스키마 생성
bun run db:generate

# 마이그레이션 실행
bun run db:migrate
```

### 5. 애플리케이션 실행

```sh
bun run dev
```

애플리케이션이 http://localhost:3000 에서 실행됩니다.

## 📊 데이터베이스 관리

### Drizzle Studio

데이터베이스를 시각적으로 관리하려면:

```sh
bun run db:studio
```

### 유용한 엔드포인트

- `GET /health` - 애플리케이션 및 데이터베이스 상태 확인
- `GET /db-status` - 데이터베이스 연결 상태 확인

## 🐳 Docker 명령어

```sh
# 컨테이너 시작
bun run docker:up

# 컨테이너 중지
bun run docker:down

# 로그 확인
bun run docker:logs
```

## 🗄️ 데이터베이스 스키마

데이터베이스 스키마는 `src/db/schema.ts`에 정의되어 있습니다.
Better Auth를 사용하는 경우 다음 명령어로 스키마를 생성할 수 있습니다:

```sh
bun run auth:generate
```

## 📁 프로젝트 구조

```
src/
├── db/
│   ├── index.ts      # 데이터베이스 연결 설정
│   └── schema.ts     # 데이터베이스 스키마
├── lib/
│   └── auth.ts       # 인증 설정
├── routes/           # API 라우트
├── services/         # 비즈니스 로직
└── index.ts          # 메인 애플리케이션
```

## 🔧 개발 도구

- **Hono**: 빠른 웹 프레임워크
- **Bun**: JavaScript 런타임 및 패키지 매니저
- **PostgreSQL**: 관계형 데이터베이스
- **Drizzle ORM**: 타입 안전한 ORM
- **Better Auth**: 인증 라이브러리
- **Docker**: 컨테이너화
- **Effect-ts**
