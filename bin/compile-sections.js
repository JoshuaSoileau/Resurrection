const fs = require('fs');
const SECTIONS_FOLDER = './src/sections';
const { resolve } = require('path');
const { readdir } = require('fs').promises;

async function getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

const COMPONENT_TEMPLATE_IMPORTS = `import $$ from 'sections/$$/$$';
`;
const COMPONENT_TEMPLATE_TYPES = `  $$: $$,
`;
const CONFIG_TEMPLATE_IMPORTS = `import $$ from 'sections/$$/$$.field.json';
`;
const CONFIG_TEMPLATE_TYPES = `$$,
`;

async function compileSections() {
  const files = await getFiles(SECTIONS_FOLDER);
  const configs = files
    .filter((name) => name.includes('.field.json'))
    .map((name) => name.replace('.field.json', ''))
    .map((name) => name.split('/').slice(-1)[0]);
  const names = configs;
  console.log(configs);

  const COMPONENT_TEMPLATE = `import { Fragment } from 'react';
${configs
  .map((name) => COMPONENT_TEMPLATE_IMPORTS.replaceAll('$$', name))
  .join('')}
const Types = {
${configs
  .map((name) => COMPONENT_TEMPLATE_TYPES.replaceAll('$$', name))
  .join('')}};

export default function Builder({ type, ...props }) {
  const Component = Types[type] || Fragment;

  return <Component {...props} />;
}
`;

  const CONFIG_TEMPLATE = `${configs
    .map((name) => CONFIG_TEMPLATE_IMPORTS.replaceAll('$$', name))
    .join('')}
const CONFIG = [
  ${configs
    .map((name) => CONFIG_TEMPLATE_TYPES.replaceAll('$$', name))
    .join('')}];

export default CONFIG;
`;

  fs.writeFileSync('./src/components/builder/Builder.jsx', COMPONENT_TEMPLATE);
  fs.writeFileSync('./src/cms/sections-config.js', CONFIG_TEMPLATE);
}

compileSections();
