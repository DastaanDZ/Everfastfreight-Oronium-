import Cors from "cors"; 
 const cors = Cors({ 
   methods: ["POST"], 
 }); 
  
 function runMiddleware(req, res, fn) { 
   return new Promise((resolve, reject) => { 
     fn(req, res, (result) => { 
       if (result instanceof Error) { 
         return reject(result); 
       } 
  
       return resolve(result); 
     }); 
   }); 
 } 
  
 export default async function handler(req, res) { 
   await runMiddleware(req, res, cors); 
//    console.log("POST request recieved", dayjs().format("DD/MM/YYYY HH:mm:ss")); 
   const url = getPageUrl(req.body.model, req.body.entry); 
   console.log(url); 
   console.log(req.body)
   try { 
     if (req.headers["secret-key"] != process.env.REVALIDATE_SECRET_KEY) 
       return res.status(500).send("Invalid secret key"); 
     else { 
       if (url) { 
         console.log( 
           "secret key matched and url is valid, waiting for 5sec"
         ); 
         setTimeout(() => { 
           async function func() { 
             console.log( 
               "page revalidation started"); 
             if (Array.isArray(url)) { 
               url.forEach(async (url) => await res.revalidate(url)); 
             } else { 
               await res.revalidate(url); 
             } 
             console.log("revalidated"); 
           } 
           func(); 
         }, 1000); 
         return res.status(200).json({ 
           message: "revalidated", 
         }); 
       } else { 
         console.log("no url"); 
         return res.status(600).json({ message: "no url" }); 
       } 
     } 
   } catch (err) { 
     console.log(err); 
     return res.status(600).send("Error revalidating"); 
   } 
 } 
  
 function getPageUrl(model, entry) { 
   switch (model) {
    case 'new':
        return ['/news',`/news/${entry.id}`]
        break;
   
    default:
        break;
   }
 }