npm install express reflect-metadata typeorm pg
npm install @types/node @types/express --save-dev
tsc --init

# tsconfig.ts
{
  "compilerOptions": {
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "experimentalDecorators": true,         // 데코레이터 활성화
    "emitDecoratorMetadata": true,          // 데코레이터 메타데이터 생성    
  }
}
