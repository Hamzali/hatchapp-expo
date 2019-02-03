const defaultHost = process.env.DEFAULT_SERVER_HOST || '192.168.1.73';
const defaultPort = process.env.DEFAULT_SERVER_PORT || 8080;

export default {
  client: {
    base_url: process.env.CLIENT_BASE_URL || `http://${defaultHost}:${defaultPort}`,
  },
  socket: {
    url: process.env.SOCKET_BASE_URL || `http://${defaultHost}:${defaultPort}`,
  },
};
