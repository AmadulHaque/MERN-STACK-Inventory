const mongoose = require("mongoose");
const DetailsByIDService = async (req, DataModel) => {
    try {
        const { id } = req.params;
        const { email: UserEmail } = req.headers;
        const query = {
            _id: new mongoose.Types.ObjectId(id),
            UserEmail,
        };
        // const data = await DataModel.findOne(query);
        const data = await DataModel.aggregate([
            { $match: query },
        ]);
        return { status: "success", data };
    } catch (error) {
        return { status: "fail", data: error };
    }
};

module.exports = DetailsByIDService;







