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

/*
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
*/

/*

# 👇️ your domain below, e.g. http://localhost:3000
Access-Control-Allow-Origin: http://example.com

Access-Control-Allow-Methods: POST, PUT, PATCH, GET, DELETE, OPTIONS

Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization

  plugins: [
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader(
            'Access-Control-Allow-Methods',
            'POST, PUT, PATCH, GET, DELETE, OPTIONS'
          );
          res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
          );
          res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
          res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
          next();
        });
      },
    },
  ],

*/

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // cors: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
});
