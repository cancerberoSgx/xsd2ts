import { ClassGenerator } from './classGenerator';
import { readFileSync, writeFileSync } from 'fs';
export function generateClassesFromXSD(xsdFilePath: string, dependencies?: {
  [name: string]: string;
}): {
  src: string;
} {
  let imports = dependencies || {};
  const xsdString = readFileSync(xsdFilePath, 'utf8');
  const generator = new ClassGenerator(imports);
  const classFileDef = generator.generateClassFileDefinition(xsdString);
  let types = generator.types.map((t) => `${t}`).join('\n');
  let src = types + '\n\n\n\n' + classFileDef.write().replace(/protected\s/g, 'public ');
  writeFileSync(`./src/generated/index.ts`, src, 'utf8');
  return { src };
}
