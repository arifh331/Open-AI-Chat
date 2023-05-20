// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//This is own api call endpoint that calls open ai
import axios from 'axios';

export default async function handler(req,res){
  //handling if the method is not a post method
  if (req.method !== 'POST') {
    //Respond with 405 message 
    res.status(405).json({message: 'The Method should be POST'})

  }
  else {
    try {
    

    const {body} = req;  

    const url = `https://api.openai.com/v1/chat/completions`

    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.OPEN_API_KEY}`
    }

    

      const response = await axios.post(url,body,{ headers: headers })
      res.status(200).json(response.data)
    }
    catch (error) {
      console.log(error)
      res.status(500).json({message:'Something went wrong'})
    }



  }

  
}