const whiteList = [
    "https://www.aaaa.com",
    "http://127.0.0.1:3000",
    "https:localhost:3100",
  ];
  const corsOptions = {
    origin: (origin, callback) => {
      if (whiteList.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORs"));
      }
    },
    optionsSuccessStatus: 200,
  };

  module.exports = corsOptions