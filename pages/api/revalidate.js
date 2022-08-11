// import Cors from "cors"; 
//  const cors = Cors({ 
//    methods: ["POST"], 
//  }); 
  
//  function runMiddleware(req, res, fn) { 
//    return new Promise((resolve, reject) => { 
//      fn(req, res, (result) => { 
//        if (result instanceof Error) { 
//          return reject(result); 
//        } 
  
//        return resolve(result); 
//      }); 
//    }); 
//  } 
  
//  export default async function handler(req, res) { 
//    await runMiddleware( req, res, cors); 

//    const  s= `${req.body}`
//    let t=JSON.parse(s)
//   //  console.log(typeof req.body);
//   //  console.log(req.body.model);

//    const url = getPageUrl(t.model, t.entry); 
//    try { 
//     console.log(req.query,req.body.model, req.body.entry);
//      if (req.query.secret!= process.env.REVALIDATE_SECRET_KEY) {
//       //  console.log('inva')
//        return res.status(500).send("Invalid secret key"); 
//       }
//      else { console.log('dskd')
//        if (url) { 
//          console.log( 
//            "secret key matched and url is valid, waiting for 5sec"
//          ); 
//          setTimeout(() => { 
//            async function func() { 
//              console.log( 
//                "page revalidation started"); 
//              if (Array.isArray(url)) { 
//                url.forEach(async (url) => await res.revalidate(url)); 
//              } else { 
//                await res.revalidate(url); 
//              } 
//              console.log("revalidated"); 
//            } 
//            func(); 
//          }, 1000); 
//          return res.status(200).json({ 
//            message: "revalidated", 
//          }); 
//        } else { 
//          console.log("no url"); 
//          return res.status(600).json({ message: "no url" }); 
//        } 
//      } 
//    } catch (err) { 
//      console.log(err); 
//      return res.status(600).send("Error revalidating"); 
//    } 
//  } 
  
//  function getPageUrl(model, entry) { 
//    switch (model) {
//     case 'new':
//         return ['/news',`/news/${entry.id}`]
//     case 'blog':
//         return ['/blogs',`/blogs/${entry.id}`]
//     case 'branch':
//         return ['/branches']
//     default:
//         break;
//    }
//  }

 