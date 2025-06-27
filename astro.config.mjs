// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://vagen-ai.github.io",
    base: '/vagen-project/',
    build: {
        assets: "_astro"
    }
});
