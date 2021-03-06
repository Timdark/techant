import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  /************* RELATIONS *****************/
  /*************** QUERY **********************/
  Query: {
    allRssData: async () => {
      return await prisma.rssData.findMany({orderBy: { date: "desc" }});
    }
  }
  /************ MUTATIONS **************************/
};
