import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";

import portfolio from "./data/modified-portfolio.js";
import Portfolio from "./models/portfolioModel.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Portfolio.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const samplePortfolio = { ...portfolio, user: adminUser };
    // const samplePortfolio = portfolio.map((portfolio) => {
    //   return { ...portfolio, user: adminUser };
    // });

    await Portfolio.insertMany(samplePortfolio);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Portfolio.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
