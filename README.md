## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `.next` folder)
- `npm run build:static` - Build static files (creates `out` folder)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Building Static Files

To build static files for deployment:

```bash
npm run build:static
```

This will:
1. Create optimized static files in the `out` folder
2. Copy files to `build` folder (if needed)

The static build includes:
- All HTML pages
- Optimized JavaScript bundles
- CSS styles
- Static assets (images, fonts, icons)


### Quick Test

To test the static build locally:

```bash
npm run build:static
npx serve out
```

Then open http://localhost:3000 to see your static site.

