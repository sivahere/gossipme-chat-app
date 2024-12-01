import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "chopra1@gmail.com",
    fullName: "Chopra karina",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "meowlisa1@gmail.com",
    fullName: "Meow Lisa",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "cementlisa1@gmail.com",
    fullName: "Cement Lisa",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  // Male Users
  {
    email: "isthri1@gmail.com",
    fullName: "Isthri Petti",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "kuppu1@gmail.com",
    fullName: "Kuppu Saamy",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },

];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();