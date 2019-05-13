export default {
    input: './src/index.js',
    preserveModules: true,
    treeshake: true,
    output: {
        dir: './dist',
        format: 'esm',
    },
};
