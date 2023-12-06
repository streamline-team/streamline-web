/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    mainFields: ['module']
  },
  test: {
    environment: 'happy-dom'
  }
})