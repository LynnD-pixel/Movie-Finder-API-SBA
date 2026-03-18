import express from 'express'
import 'dotenv/config'
import movieRoutes from './routes/moviesRoutes'


const app = express()
const PORT = 3000

app.use(express.json());

app.use("/api", movieRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port:` + PORT);
});