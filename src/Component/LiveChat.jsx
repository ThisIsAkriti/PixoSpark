import { useEffect, useState } from "react"
import ChatMsgs from "./ChatMsgs"
import { useDispatch, useSelector } from "react-redux";
import { addMsg } from "../utils/chatSlice";
import { generate, randomMessages } from "../utils/helper";
const LiveChat = () => {

  const [liveMsg, setLiveMsg] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chatMsgs. messages);

  useEffect(() => {
   
    const i =setInterval(() => {
      //api polling
      dispatch( addMsg({
        name: generate(),
        message:randomMessages(20)
      }))
    }, 500)
    return() => clearInterval(i);
  })
  
  return (
    <div>
      <div className="w-full border-gray-400  bg-slate-50 rounded-lg border text-xs sm:h-[450px] h-[300px] overflow-y-scroll no-scrollbar flex flex-col-reverse mr-5 md:mt-0 mt-4">
        
        {chatMessages.map(c => <ChatMsgs
        key={c.index}
        name ={c.name}
        messages={c.message}
        />)}
      </div>

      <form className="grid grid-flow-col m-1 rounded-lg border border-gray-400 p-2" onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted!") , liveMsg
        dispatch(
          addMsg({
            name: "You",
            message: liveMsg,
          })
        );
        setLiveMsg("");
        }}>
        <input className=" text-sm ml-2 col-span-10  rounded-tl-lg rounded-bl-lg px-2 outline-none" type="text" placeholder="Message" value={liveMsg} onChange={(e) => {setLiveMsg(e.target.value)}}
          />

        <button className=" rounded-md border border-gray-300 text-gray-500 text-sm col-span-1 w-full">Send</button>

      </form>
    </div>
  )
}

export default LiveChat
