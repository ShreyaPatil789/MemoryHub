import mongoose from "mongoose";
const Schema = mongoose.Schema;
const User = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const contentType = ['Youtube', 'Twitter', 'video', 'article', 'audio'];
const Content = new Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentType, required: true },
    title: { type: String, required: true },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tags" }],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
const Tags = new Schema({
    title: { type: String },
});
const Link = new Schema({
    hash: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
});
const Usermodel = mongoose.model("User", User);
const Tagsmodel = mongoose.model("Tags", Tags);
const Linkmodel = mongoose.model("Link", Link);
const Contentmodel = mongoose.model("Content", Content);
export default { Usermodel, Tagsmodel, Linkmodel, Contentmodel };
//# sourceMappingURL=db.js.map