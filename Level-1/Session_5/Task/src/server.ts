import express from 'express'
import fleetRouter from './routers/Microbus.router';
const app=express();
const PORT=5000;
app.use(express.json());
app.use('/api/fleet',fleetRouter)
app.listen(PORT,()=>{
    console.log(`App working on http://localhost:${PORT}`);
    
})