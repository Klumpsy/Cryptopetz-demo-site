const {createProxyMiddleware} = require("http-proxy-middleware"); 

module.exports = function(app) { 
    app.use(
        createProxyMiddleware("/pool", { 
            target: "https://js.adapools.org/pools/dc6f409d5bd30a59b7b1f0f7969d83b01758e55d3b4e5b7b487532b8/summary.json",
            secure: false,
            changeOrigin: true,

        })
    );
    app.use(
        createProxyMiddleware("/petz", { 
            target: "https://cryptopetz.info/api/petz/metadata/all",
            secure: false,
            changeOrigin: true,
        })
    );
};