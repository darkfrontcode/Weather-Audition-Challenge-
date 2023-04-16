/*
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    cors: false,
  },
});
*/

/*
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, PATCH, PUT, DELETE, OPTIONS'
          );
          res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, Content-Type, X-Auth-Token'
          );
          next();
        });
      },
    },
  ],
});
*/

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          next();
        });
      },
    },
  ],
});
