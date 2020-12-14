const NodeMediaServer = require('node-media-server');
const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8979,
        mediaroot: './media/',
        allow_origin: '*',
    },
    relay: {
        ffmpeg: './bin/ffmpeg.exe',
        tasks: [
            {
                app: 'live',
                mode: 'static',
                edge: 'rtsp://ceshi',//rtsp
                name: 'technology',
                rtsp_transport: 'tcp', //['udp', 'tcp', 'udp_multicast', 'http']
            }
        ]
    },
};

var nms = new NodeMediaServer(config)
nms.run();
