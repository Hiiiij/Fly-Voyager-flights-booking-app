import { app, connectDB } from "../src/flight-service/index.js";
import { VercelRequest, VercelResponse } from "@vercel/node";

const handler = async (req: VercelRequest, res: VercelResponse) => {
    console.log("request is here");
    await connectDB();
    await app(req, res)
}

export default handler;

