import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (env.EMAIL_USER) process.env.EMAIL_USER = env.EMAIL_USER;
  if (env.EMAIL_PASS) process.env.EMAIL_PASS = env.EMAIL_PASS;

  return {
    plugins: [
      react(),
      {
        name: 'vite-email-api-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (!req.url?.startsWith('/api/')) {
              return next();
            }

            if (req.method !== 'POST') {
              res.statusCode = 405;
              return res.end('Method Not Allowed');
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                let data: any = {};
                try {
                  data = JSON.parse(body || '{}');
                } catch (parseErr: any) {
                  res.setHeader('Content-Type', 'application/json');
                  res.statusCode = 400;
                  return res.end(JSON.stringify({ error: 'Invalid JSON payload: ' + parseErr.message }));
                }

                const { sendContactEmail, sendPrayerEmail, sendPartnershipEmail } = await import(
                  './src/services/emailService'
                );

                if (req.url === '/api/contact') {
                  await sendContactEmail(data);
                } else if (req.url === '/api/prayer') {
                  await sendPrayerEmail(data);
                } else if (req.url === '/api/partnership') {
                  await sendPartnershipEmail(data);
                } else {
                  res.statusCode = 404;
                  return res.end(JSON.stringify({ error: 'Endpoint not found' }));
                }

                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, message: 'Email sent successfully' }));
              } catch (error: any) {
                console.error('Email API Error:', error);
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 500;
                res.end(JSON.stringify({ error: error?.message || 'Failed to send email' }));
              }
            });
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});

