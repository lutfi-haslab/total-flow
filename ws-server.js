// Creating a new websocket server
const WebSocketServer = require('ws');
const wss = new WebSocketServer.Server({ port: 8080 })
 
// Creating connection using websocket
wss.on("connection", ws => {
    console.log("new client connected");
    // sending message
    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`)
        ws.send(data);
    });
    // handling what to do when clients disconnects from server
    ws.on("close", () => {
        console.log("the client has connected");
    });
    // handling client connection error
    ws.onerror = function () {
        console.log("Some Error occurred")
    }
});
console.log("The WebSocket server is running on port 8080");