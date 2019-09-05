import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        myProfile:(_,___,{request, isAuthenticated})=>{
            isAuthenticated(requsest);
            cosnt (uset) = request;
            return prisma.user({id:user.id});
        }
    }
}