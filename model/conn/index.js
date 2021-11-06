const mongoose = require("mongoose");
//`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,

async function Connected() {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Conectado ao MongoDB/Atlas...");
    })
    .catch(() => {
      console.log("ERROR");
    });
}

module.exports = Connected;
