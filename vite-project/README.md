# experimental-ui with vite-project
experimental-ui
dev env : vite + react-ts + rtk-query

## config path alias
### install
```
yarn create vite
yarn install
yarn dev

yarn add -D @types/node
```

1. check compiler options "paths" in tsconfig.json
2. check installation @types/node to add compiler option "types"
3. check resolve options "alias" in vite.config.ts

### tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "types": ["node"],
    "paths": {
      "@/*": ["src/*"]
    }
  },
  ...
}
```

### vite.config.ts

```typescript
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
});
```
## config redux-toolkit query
### install
```
yarn add @reduxjs/toolkit react-redux
```