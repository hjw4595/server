import { isAuthenticated } from "../../../middlewes";
import { prisma } from "../../../../generated/prisma-client";

export default{
    Query:{
        addComment: async(_,args, {request}) => {
            isAuthenticated(request);
            const {text, postId} = args;
            const {user} = request
            const comment = await prisma.createComment({user:{
                connect:{
                    id: user.id
                },
                post:{
                    id: postId
                },
                text
            }});
            return comment;

        }
    }
}