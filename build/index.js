"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import dependencies
const express_1 = __importDefault(require("express"));
// Create variables
const app = (0, express_1.default)();
// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to Micro Server 2023!');
});
// Start Server
app.listen(8080, () => {
    console.log('The application is listening on port 8080!');
});
