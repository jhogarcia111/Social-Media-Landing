import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));
  app.use(express.json({ limit: '10kb' }));

  // API endpoint to receive leads (stores them server-side and optionally emails if SMTP configured)
  app.post('/api/lead', (req, res) => {
    try {
      const lead = {
        name: req.body.name || null,
        email: req.body.email || null,
        phone: req.body.phone || null,
        plan: req.body.plan || null,
        utm: req.body.utm || null,
        createdAt: new Date().toISOString(),
      };

      // Append to logs directory (safe, non-public)
      const logsDir = path.join(__dirname, '..', '.manus-logs');
      if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
      const logPath = path.join(logsDir, 'leads.log');
      fs.appendFileSync(logPath, JSON.stringify(lead) + '\n', 'utf-8');

      // TODO: If SMTP env vars are set, you could send email here using nodemailer.

      res.json({ ok: true });
    } catch (err) {
      console.error('lead error', err);
      res.status(500).json({ ok: false });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
