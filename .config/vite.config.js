import {defineConfig} from 'vite'

export default defineConfig({
  root:"public",
  publicDir:"../assets",
  build:{
    outDir:"../dist"
  }
})