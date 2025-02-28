const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
// Set storage for uploaded files

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use("/uploads", express.static("uploads"));

// إعداد Multer لتخزين الصور
// إعداد Multer لتخزين الصور على القرص بدلاً من الذاكرة
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // حفظ الصور في مجلد uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // تغيير اسم الملف ليكون فريدًا
  },
});

const upload = multer({ storage: storage });

// اتصال بقاعدة البيانات
mongoose
  .connect("mongodb://127.0.0.1:27017/carsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    seedDatabase(); // استدعاء وظيفة إضافة البيانات الافتراضية
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const user = new User({ email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// تسجيل الدخول
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    res.json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ message: "Error logging in" });
  }
});

// تعريف الـ Schema
const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  color: String,
  condition: String,
  image: { type: String, required: true },
});

// إنشاء نموذج Model
const Car = mongoose.model("Car", carSchema);

// وظيفة لإضافة بيانات افتراضية إذا كانت القاعدة فارغة
async function seedDatabase() {
  const carCount = await Car.countDocuments(); // التحقق من عدد السيارات في القاعدة
  if (false) {
    const defaultCars = [
      // سيارات BMW
      {
        brand: "BMW",
        price: 50000,
        color: "White",
        condition: "New",
        image:
          "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "BMW",
        price: 52000,
        color: "Black",
        condition: "Used",
        image:
          "https://images.pexels.com/photos/93615/pexels-photo-93615.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "BMW",
        price: 53000,
        color: "Blue",
        condition: "New",
        image:
          "https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=600",
      },

      // سيارات Ford
      {
        brand: "Mercedes",
        price: 25000,
        color: "Red",
        condition: "New",
        image:
          "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "Mercedes",
        price: 23000,
        color: "Silver",
        condition: "Used",
        image:
          "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "Mercedes",
        price: 24000,
        color: "Black",
        condition: "New",
        image:
          "https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&w=600",
      },

      // سيارات Chevrolet
      {
        brand: "Chevrolet",
        price: 22000,
        color: "Yellow",
        condition: "New",
        image:
          "https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        brand: "Chevrolet",
        price: 21000,
        color: "Green",
        condition: "Used",
        image:
          "https://images.pexels.com/photos/54546/pexels-photo-54546.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "Chevrolet",
        price: 25000,
        color: "White",
        condition: "New",
        image:
          "https://images.pexels.com/photos/242139/pexels-photo-242139.jpeg?auto=compress&cs=tinysrgb&w=600",
      },

      // سيارات Audi
      {
        brand: "Audi",
        price: 55000,
        color: "Gray",
        condition: "New",
        image:
          "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "Audi",
        price: 60000,
        color: "Blue",
        condition: "Used",
        image:
          "https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        brand: "Audi",
        price: 59000,
        color: "Black",
        condition: "New",
        image:
          "https://images.pexels.com/photos/1054211/pexels-photo-1054211.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ];

    await Car.insertMany(defaultCars); // إضافة البيانات الافتراضية
    console.log("Default cars added to the database");
  } else {
    console.log("Database already contains data. Skipping seeding.");
  }
}

// API لإرجاع جميع السيارات
app.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();

    const carsWithImages = cars.map((car) => ({
      _id: car._id,
      brand: car.brand,
      model: car.model,
      price: car.price,
      color: car.color,
      condition: car.condition,
      image: car.image ? `http://localhost:3000${car.image}` : null,
    }));

    res.json(carsWithImages);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving cars." });
  }
});

// API لإضافة سيارة جديدة مع رفع صورة

app.post("/cars", upload.single("image"), async (req, res) => {
  try {
    const newCar = new Car({
      brand: req.body.brand,
      model: req.body.model,
      price: req.body.price,
      color: req.body.color,
      condition: req.body.condition,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newCar.save();
    res.status(201).json({ message: "Car added successfully.", car: newCar });
  } catch (err) {
    res.status(400).json({ message: "Error adding car." });
  }
});

// API لتحديث سيارة بناءً على الـ ID
app.put("/cars/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      {
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        color: req.body.color,
        condition: req.body.condition,
        image: req.body.image,
        model: req.body.model,
      },
      { new: true } // لتحديث السيارة وإرجاع البيانات المعدلة
    );
    if (!updatedCar) return res.status(404).send("Car not found.");
    res.json(updatedCar);
  } catch (err) {
    res.status(400).send("Error updating car.");
  }
});

// API لحذف سيارة بناءً على الـ ID
app.delete("/cars/:id", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).send("Car not found.");
    res.status(200).send("Car deleted successfully.");
  } catch (err) {
    res.status(400).send("Error deleting car.");
  }
});

// API للبحث عن السيارات بناءً على السعر، البراند، والحالة
app.get("/search", async (req, res) => {
  try {
    const { price, brand, condition } = req.query; // الحصول على القيم من الـ query string

    // بناء شرط البحث
    const query = {};

    if (price) {
      // إذا تم تمرير السعر، نبحث عن السيارات التي تكون أسعارها أقل من أو تساوي هذا السعر
      query.price = { $lte: price }; // $lte تعني أقل من أو تساوي
    }

    if (brand) query.brand = { $regex: brand, $options: "i" }; // الـ regex للبحث بشكل غير حساس لحالة الأحرف
    if (condition) query.condition = { $regex: condition, $options: "i" };

    // استرجاع السيارات التي تطابق الشروط
    const cars = await Car.find(query);
    res.json(cars);
  } catch (err) {
    res.status(500).send("Error searching cars.");
  }
});

// تشغيل الخادم
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
