
// Member 4 - Station Validation
// Project: KitchenKeys Cloud Kitchen

function validateStation(req, res, next) {
    const { cuisine } = req.query;

    if (typeof cuisine !== "string" || cuisine.trim() === "") {
        return res.status(400).json({
            error: "Please provide a valid cuisine to search"
        });
    }

    next();
}

module.exports = { validateStation };
