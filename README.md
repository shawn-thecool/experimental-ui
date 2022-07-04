# experimental-ui

experimental-ui

## install

```
yarn create vite

yarn add -D @types/node
yarn install
yarn dev
```

## config path alias

1. check compiler options "paths" in tsconfig.json
2. check installation @types/node to add compiler option "types"
3. check resolve options "alias" in vite.config.ts

tsconfig.json

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

vite.config.ts

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
