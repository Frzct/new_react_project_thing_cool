import { parse } from "dotenv"
import { fetchFromCollections } from "../database.js"

const Modes = {
    'safemode': {_id: 0, password: 0},
}

export default async function(mode, searchParams, queryData){
    let {page, pageCount} = queryData
    page = parseInt(page, 10) || 1
    pageCount = parseInt(pageCount, 10) || 1

    console.log(page, pageCount, queryData)
    const Collection = fetchFromCollections("UserData")
    // const setting = mode ? Modes[mode] : Modes['safemode']
    
    try {
      //let me be real, i understand none of how $facet works.
      //i'll use the INEFFICIENT method

      const totalUsers = await Collection.count({});
      const Users = await Collection.find({})
        .limit(pageCount)
        .skip((page - 1) * pageCount);
      //console.log("Logged users;", Users)
      return {
        metadata: { totalCount: totalUsers, page, pageCount },
        data: await Users.toArray()
      }
    
      // If "page" and "pageSize" are not sent we will default them to 1 and 50.
      /*page = parseInt(page, 10) || 1;
      pageCount = parseInt(pageCount, 10) || 50;
  
      const Users = Collection.aggregate([ // how do i make this await help j
        ...searchParams, // unpack [ { $match: }, { $sort: }, { $facet } ]
        {
          $facet: {
            //metadata: [{ $count: 'totalCount' }],
            data: [{ $skip: (page - 1) * pageCount }, { $limit: pageCount }],
          },
        },
      ]);
  
      return {
        //metadata: { totalCount: Users[0].metadata[0].totalCount, page, pageCount },
        data: Users[0].data,
      };*/

    } catch (error) {
      throw new Error(error)
    }
}