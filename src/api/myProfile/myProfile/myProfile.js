import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        myProfile:(_,___,{request, isAuthenticated})=>{
            isAuthenticated(requsest);
            cosnt (user) = request;
            return prisma.user({id:user.id}).$fragment;
        }
    }
}