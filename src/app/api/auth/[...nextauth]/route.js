import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongoDB";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs'


const authOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {},
          async authorize(credentials, req) {
            const {email, password} = credentials;

            try{
                await connectMongoDB();
                const user = await User.findOne({email});

                if(!user) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if(!passwordMatch){
                    return null;
                }
                return user

            }catch(err){
                console.log(err);
            }
          }
        })
      ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/login"
    },
    callbacks: {
        async jwt({token, user, session}) {
            if(user){
                return {
                    ...token,
                    id:user.id,
                    role: user.role,
                }
            }
            return token
        },
        async session({token, user, session}) {
            return {
                ...session,
                user:{
                    ...session.user,
                    id:token.id,
                    role:token.role
                }
            }
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}