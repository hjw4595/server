import { prisma } from "../../../../generated/prisma-client";

export default {
    Query:{
        searchUser:async(_,args) => {prisma.user({
            where:{
                OR:[
                    {username_contains: args.term},
                    {first_name_contains: args.term},
                    {lastName_contains:args.term}]
            }
        })
        }
    }
}