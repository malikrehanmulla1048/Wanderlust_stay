const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");




async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "views"));
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.urlencoded({extended:true}));
    app.use(express.static(path.join(__dirname +"/public/css")));
    app.use(express.static(path.join(__dirname +"/public/js")));
    app.use(methodOverride('_method'));

    app.get("/", (req, res) => {
        res.send("the app is working ::");
    });

    app.get("/listing", async (req, res) => {
        try {
            const data = await Listing.find({});
            res.render("listings/index", { data });
        } catch (error) {
            console.error("Error fetching listings:", error);
            res.status(500).send("Error fetching listings");
        }
    });

    app.get("/listing/new", (req, res) => {
        res.render("listings/new", { error: null, formData: {} });
    });

    app.post("/listing", async (req, res) => {
        const listing = new Listing({
            title: req.body.title,
            discription: req.body.discription,
            image: req.body.image,
            price: req.body.price,
            location: req.body.location,
            country: req.body.country
        });

        try {
            await listing.save();
            res.redirect(`/listing/${listing._id}`);
        } catch (error) {
            if (error.name === "ValidationError") {
                return res.status(400).render("listings/new", {
                    error: error.message,
                    formData: req.body
                });
            }

            console.error("Error creating listing:", error);
            res.status(500).send("Error creating listing");
        }
    });

    app.get("/listing/:id/edit", async (req, res) => {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(404).send("Stay not found");
        }

        try {
            const listing = await Listing.findById(id);
            if (!listing) {
                return res.status(404).send("Stay not found");
            }

            res.render("listings/edit", { listing, error: null, formData: listing });
        } catch (error) {
            console.error("Error loading listing edit form:", error);
            res.status(500).send("Error loading listing edit form");
        }
    });

    app.patch("/listing/:id", async (req, res) => {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(404).send("Stay not found");
        }

        const updates = {
            title: req.body.title,
            discription: req.body.discription,
            image: req.body.image,
            price: req.body.price,
            location: req.body.location,
            country: req.body.country
        };

        try {
            const listing = await Listing.findByIdAndUpdate(id, updates, {
                new: true,
                runValidators: true
            });

            if (!listing) {
                return res.status(404).send("Stay not found");
            }

            res.redirect(`/listing/${listing._id}`);
        } catch (error) {
            if (error.name === "ValidationError" || error.name === "CastError") {
                const listing = await Listing.findById(id);
                if (!listing) {
                    return res.status(404).send("Stay not found");
                }

                return res.status(400).render("listings/edit", {
                    listing,
                    error: error.message,
                    formData: updates
                });
            }

            console.error("Error updating listing:", error);
            res.status(500).send("Error updating listing");
        }
    });

    app.get("/listing/:id", async (req, res) => {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(404).send("Stay not found");
        }

        try {
            const listing = await Listing.findById(id);
            if (!listing) {
                return res.status(404).send("Stay not found");
            }

            res.render("listings/show", { listing });
        } catch (error) {
            console.error("Error fetching listing:", error);
            res.status(500).send("Error fetching listing");
        }
    });


    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main().catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exitCode = 1;
});