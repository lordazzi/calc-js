tsc --project tsconfig.app.json --out build/calc.amd.js --module amd;
tsc --project tsconfig.app.json --out build/calc.system.js --module system;
tsc --project tsconfig.app.json --outDir build/commonjs/ --module commonjs --moduleResolution node --rootDir src;
tsc --project tsconfig.app.json --outDir build/um/ --module umd;
