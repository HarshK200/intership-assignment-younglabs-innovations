const Express = require("express");
const cors = require("cors");

const PORT = 8080;
const app = Express();

// middlewares
app.use(Express.json());
app.use(cors()); // cors enabled for all origin for simplicity sake

// Routes
app.get("/api/greet", (req, res) => {
  const { name } = req.query;

  // when name is undefined
  if (!name) {
    return res.status(422).json({
      error: "Name is required.",
    });
  }

  return res.status(200).json({
    message: `Hello, ${name}! Welcome to Younglabs.`,
  });
});

// starting server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
