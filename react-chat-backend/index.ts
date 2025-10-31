import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { chats, currentUser } from './data';
import { initializeSocket } from './services/socketManager';

const app = express();
const port = 4000;

// --- Middleware ---
app.use(cors()); // Allow cross-origin requests from your frontend
app.use(express.json());

// --- REST API Routes ---
// This route serves the initial chat data to the frontend
app.get('/api/chats', (req, res) => {
    res.json(chats);
});

app.get('/api/currentUser', (req, res) => {
    res.json(currentUser);
});

// --- Server Setup ---
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Your frontend URL
        methods: ["GET", "POST"]
    }
});

// Initialize Socket.IO logic
initializeSocket(io);

server.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`);
});