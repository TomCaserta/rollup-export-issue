export default {
    input: './src/index.js',
    preserveModules: true,
    treeshake: false,
    output: {
        dir: './dist',
        format: 'esm',
    },
};
