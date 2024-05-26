import express, { Application } from "express";
import { route } from "./routes/route";

import { envs } from "./config/envs";

const port = envs.PORT || 3001;

const application: Application = express();

application.use("/api/v1", route);

application.listen(port, () => {
  console.log(`Server running on PORT: ${port}`);
});
