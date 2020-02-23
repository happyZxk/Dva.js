module.exports = {
    "GET /api/product":(req, res) => {
        const params = req.query;
        console.log("params", params);
        res.json({
            "name": "高亮"
        })
    }
}