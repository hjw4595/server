import {prisma} from "../../../generated/prisma-client"

export default {
    Query: {
      test: async() => {
          console.log(await prisma.users());
          return "TESTING";
      }
    }
  };