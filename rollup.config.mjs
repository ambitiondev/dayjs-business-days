const outputConfigs = {
    esm: {
        dir: 'dist/',
        entryFileNames: '[name].esm.js',
        chunkFileNames: '[name]-[hash].esm.js',
        sourcemap: true,
    },
};

/**
 *
 * @param {string} _
 * @returns {import('rollup').RollupOptions}
 */
const createConfig = (format, output) => {
    return {
        input: 'dist-transpiled/index.js',
        output: {
            ...output,
            format,
        },
        external: ['dayjs'],
    };
};

const configs = Object.keys(outputConfigs).map((format) =>
    createConfig(format, outputConfigs[format])
);

export default configs;
