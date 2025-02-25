import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      include: ['**/*.jsx', '**/*.js'], // Process both .js and .jsx files
    }),
  ],
});
  plugins: [tailwindcss(), react()],
});
