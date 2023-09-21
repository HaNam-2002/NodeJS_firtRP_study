// chạy server
const app = require("./app");
require("dotenv").config();
app.listen(process.env.PORT, () => {
  console.log("Project run at port 3000");
});
