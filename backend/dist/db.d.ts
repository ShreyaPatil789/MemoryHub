import mongoose from "mongoose";
declare const _default: {
    Usermodel: mongoose.Model<{
        username: string;
        password: string;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        username: string;
        password: string;
    }, {}, mongoose.DefaultSchemaOptions> & {
        username: string;
        password: string;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        username: string;
        password: string;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        username: string;
        password: string;
    }>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
        username: string;
        password: string;
    }> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
    Tagsmodel: mongoose.Model<{
        title?: string | null;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        title?: string | null;
    }, {}, mongoose.DefaultSchemaOptions> & {
        title?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        title?: string | null;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        title?: string | null;
    }>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
        title?: string | null;
    }> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
    Linkmodel: mongoose.Model<{
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    }, {}, mongoose.DefaultSchemaOptions> & {
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    }>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
        userId: mongoose.Types.ObjectId;
        hash?: string | null;
    }> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
    Contentmodel: mongoose.Model<{
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    }, {}, {}, {}, mongoose.Document<unknown, {}, {
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    }, {}, mongoose.DefaultSchemaOptions> & {
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    }, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    }>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
        type: string;
        link: string;
        title: string;
        tags: mongoose.Types.ObjectId[];
        userId: mongoose.Types.ObjectId;
    }> & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }>>;
};
export default _default;
//# sourceMappingURL=db.d.ts.map