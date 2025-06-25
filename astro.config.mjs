// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://vagen-ai.github.io",
    base: '/',
    build: {
        assets: "_astro"
    }
});
