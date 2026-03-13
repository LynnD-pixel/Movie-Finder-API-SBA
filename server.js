import express from 'express'
import 'dotenv/config'
import routes from './routes/moviesRoutes'
import controller from './controllers/movieController'


const app = express()
const PORT = 3000

app.use(express.json());

app.use("/api", movieRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port:` + PORT);
});