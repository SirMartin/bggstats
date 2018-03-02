import { Request, Response } from "express";
const path = require('path');

export let index = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../views', 'home/index.html'));
};