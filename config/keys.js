dbPassword =
  "mongodb+srv://shuja:" +
  encodeURIComponent("shuja") +
  "@cluster0.an6rmhj.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword,
};
