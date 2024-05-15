import { Hono } from "hono";
import { logger } from "hono/logger";
import { expensesRoute } from "./routes/expenses";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("*", logger());

app.route("/api/expenses", expensesRoute);

app.get("*", serveStatic({ root: "./client/dist" }));
app.get("*", serveStatic({ root: "./client/dist/index.html" }));

export default app;
