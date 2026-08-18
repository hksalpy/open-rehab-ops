FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile && pnpm build

FROM node:22-alpine
RUN corepack enable
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3001
CMD ["pnpm", "--filter", "@open-rehab-ops/api", "start"]
