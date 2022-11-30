import * as express from "express"
import * as bodyParser from "body-parser"
import Routes from "./routes"

const app = express();

app.use(bodyParser.json());
app.use(Routes)

app.listen(3333);
