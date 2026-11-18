const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const path = require("path");
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

function renderPage(res, viewName, locals, layoutOptions) {
    const viewPath = path.join(__dirname, "views", `${viewName}.ejs`);

    return new Promise((resolve, reject) => {
        ejs.renderFile(viewPath, locals, (viewError, body) => {
            if (viewError) {
                return reject(viewError);
            }

            res.render("layout/boilerplate", {
                ...layoutOptions,
                body,
                showHomeIcon: layoutOptions.showHomeIcon || false
            }, (layoutError, html) => {
                if (layoutError) {
                    return reject(layoutError);
                }

                res.send(html);
                resolve();
            });
        });
    });
}



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
    app.use("ejs",ejsMate)


    app.get("/", (req, res) => {
        res.redirect("/listing");
    });

    app.get("/listing", async (req, res) => {
        try {
            const data = await Listing.find({});
            await renderPage(res, "listings/index", { data }, {
                title: "Stays | Wanderlust",
                stylesheets: ["/css/listings.css"],
                scripts: ["/js/listings.js"]
            });
        } catch (error) {
            console.error("Error fetching listings:", error);
            res.status(500).send("Error fetching listings");
        }
    });

    app.get("/listing/new", async (req, res) => {
        try {
            await renderPage(res, "listings/new", { error: null, formData: {} }, {
                title: "Create a stay | Wanderlust",
                stylesheets: ["/css/listings.css", "/css/new.css"]
            });
        } catch (error) {
            console.error("Error loading new listing form:", error);
            res.status(500).send("Error loading new listing form");
        }
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
                try {
                    return await renderPage(res.status(400), "listings/new", {
                        error: error.message,
                        formData: req.body
                    }, {
                        title: "Create a stay | Wanderlust",
                        stylesheets: ["/css/listings.css", "/css/new.css"]
                    });
                } catch (renderError) {
                    console.error("Error rendering new listing form:", renderError);
                    return res.status(500).send("Error rendering new listing form");
                }
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

            await renderPage(res, "listings/edit", { listing, error: null, formData: listing }, {
                title: `Edit ${listing.title} | Wanderlust`,
                stylesheets: ["/css/listings.css", "/css/new.css", "/css/edit.css"]
            });
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

                try {
                    return await renderPage(res.status(400), "listings/edit", {
                        listing,
                        error: error.message,
                        formData: updates
                    }, {
                        title: `Edit ${listing.title} | Wanderlust`,
                        stylesheets: ["/css/listings.css", "/css/new.css", "/css/edit.css"]
                    });
                } catch (renderError) {
                    console.error("Error rendering listing edit form:", renderError);
                    return res.status(500).send("Error rendering listing edit form");
                }
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

            await renderPage(res, "listings/show", { listing }, {
                title: `${listing.title} | Wanderlust`,
                stylesheets: ["/css/show.css", "/css/delete-confirm.css"],
                scripts: ["/js/delete-confirm.js", "/js/home-icon.js"],
                showHomeIcon: true
            });
        } catch (error) {
            console.error("Error fetching listing:", error);
            res.status(500).send("Error fetching listing");
        }
    });

    app.delete("/listing/:id", async (req, res) => {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(404).send("Stay not found");
        }

        try {
            const listing = await Listing.findByIdAndDelete(id);
            if (!listing) {
                return res.status(404).send("Stay not found");
            }

            res.redirect("/listing");
        } catch (error) {
            console.error("Error deleting listing:", error);
            res.status(500).send("Error deleting listing");
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