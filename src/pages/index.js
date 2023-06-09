import Image from 'next/image'
//import styles from './page.module.css'
import {useState, useEffect,useRef} from 'react'

//axios to make the api call
import axios from 'axios'
import TypingAnimation from '@/components/TypingAnimation';

export default function Home() {
  //I am going to use this to scroll to the bottom of the chat
  const chatContainerRef = useRef(null);

  //THis is the user input value
  const [inputValue,setInputValue] = useState('');
  

  //This is the converstation history. Starts as empty array 
  const [chatLog,setChatLog]= useState([])
  
  //Waiting for api response
  const [isLoading, setIsLoading] = useState(false)

  //This is the useEffect hook to scroll to the bottom of the chat
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatLog]);

  //function to handle when the user submits a message 
  const handleSubmit = (event)=>{

    //we don't want the page to default
    event.preventDefault()
    
    //adding new chatlong into
    setChatLog((prevChatLog)=>[...prevChatLog, {type:'user',message:inputValue}])
    
    //So whenever userclicks on submit it calls it 
    sendMessage(inputValue)

    //Clear out for new message 
    setInputValue('');

  }
  
  //this is the api call information
  const sendMessage = (message) =>{
    const url = `/api/chat`

    // const headers = {
    //   'Content-type': 'application/json',
    //   'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`
    // }

    const data = {
      model: 'gpt-3.5-turbo',
      messages: [{"role":"user","content":message}]
    }

    setIsLoading(true);

    //over here going into the other file to make the api call
    axios.post(url,data).then((response) => {
    console.log(response)

    //We are using setchatlog to take the previous chat and adding to it from the response 
    setChatLog((prevChatLog)=>[...prevChatLog, {type:'bot',message:response.data.choices[0].message.content}])
    setIsLoading(false)
    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
    })

  }



  return (
    ////container div for the entire chat 
    //className='container mx-auto max-w-[700px]'>
    <div className='container mx-auto max-w-[700px]'>


      {/*  className='flex flex-col h-screen bg-gray-900' */}
      <div className='flex flex-col h-screen bg-gray-900'>
    <h1 className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl'>
      Chat with A.I
    </h1>

    <div className='flex-grow p-6 overflow-y-auto' ref={chatContainerRef}>
      <div  className='flex flex-col space-y-4'>

      { 
      //This is the chatlog and we are displaying all the messages one after the other
      chatLog.map((message,index)=>(

        //div for the chat bubbles and where they would be placed if they are user or ai
      <div key={index} className={`flex ${message.type === 'user' ? 'justify-end': 'justify-start'}`}>

          {/* This the div deciding the actual messages inside the chat, their styles depending on if their user or AI  */}
          <div className={`${message.type === 'user' ? 'bg-blue-700' : 'bg-red-400'} rounded-lg p-4 text-white max-w-sm`}> 
          {message.message}

          </div>
          
        </div>

      ))
    }
    {
      isLoading && 
      <div key={chatLog.length} className='flex justify-start'>
        <div className='bg-red-400 rounded-lg p-4 text-white max-w-sm'>
         <TypingAnimation />
        </div>
      </div>
    }

      </div>

    </div>

    

    <form onSubmit={handleSubmit} className='flex-none p-6'>
      <div className='flex rounded-lg border border-gray-350 bg-gray-800'>

      
      <input type='text' className='flex-grow px-4 py-2 bg-transparent text-white focus:outline:none' 
      placeholder='Please type your message here...' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />


      <button type='submit' className='bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300 ml-2'
      >Send</button>
      </div>
    </form>

    </div>
    </div>
  )

}
