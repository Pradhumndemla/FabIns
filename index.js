import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path'
import cors from 'cors'
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import indexRoute from './routes/index.js';
import "./mongoDb.js"
// import "./config.js"


const app = express();
const port = process.env.PORT || 4000


// middleware

app.use(cors());
app.use("/assets", express.static(path.join(process.cwd(), "/public/assets")))
app.use(express.static(path.join(process.cwd(), "/public/assets")))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/", indexRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);


app.get('/', (req, res) => {
    res.send("api is working");
});

app.get('*', (req, res) => {
    res.send("<h1>404 Error</h1><p>Page Not Found</p>");
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("frontend/build"))
    app.get("*",(req,res)=>{
        let abc = path.resolve(__dirname,"frontend","build","index.html")
        console.log(abc);
        res.sendFile(abc)
    })
}

app.listen(port, () => { console.log(`server is running on ${port}`) })