import {NextResponse} from "next/server"
import { connectMongoDB } from "../../../../lib/mongoDB";
import User from "../../../../models/user";


export async function POST(req) {
    try{
        await connectMongoDB();
        const {email} = await req.json();
        console.log("email to check: ", email)
        const user = await User.findOne({email}).select("_id");
        console.log("User: ", user)

        return NextResponse.json({user})
    }catch(err){
        console.log(err);
    }
}