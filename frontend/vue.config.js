export const devServer = {
    proxy: {
        "/api": {
            target: "http://localhost:4000",
            changeOrigin: true,
        },
    },
};
