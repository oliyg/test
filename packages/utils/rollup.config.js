const rollup = require("rollup");
const rollupTypescript = require("@rollup/plugin-typescript");

const inputOptions = {
  input: "lib/index.ts",
  plugins: [rollupTypescript()],
};

const outputOpts = {
  esm: { file: "dist/bundle.esm.mjs", format: "esm" },
  umd: { file: "dist/bundle.umd.js", format: "umd", name: "utils" },
};

const build = async () => {
  const bundle = await rollup.rollup(inputOptions);

  const opts = [];
  for (const [key, val] of Object.entries(outputOpts)) {
    opts.push(val);
  }

  const output = await Promise.all(opts.map(bundle.generate));

  if (output) {
  }

  await Promise.all(opts.map(bundle.write));

  await bundle.close();
};

build();
