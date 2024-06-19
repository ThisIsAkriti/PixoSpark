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
    <>
      <div className="w-full border-gray-400  bg-slate-50 rounded-lg  border m-1 text-xs h-[450px] overflow-y-scroll no-scrollbar flex flex-col-reverse">
        
        {chatMessages.map(c => <ChatMsgs
        key={c.index}
        name ={c.name}
        messages={c.message}
        />)}
      </div>

      <form className="w-full grid grid-flow-col m-1 rounded-lg border border-gray-400 py-1" onSubmit={(e) => {
        e.preventDefault();
        console.log("form submitted!") , liveMsg
        dispatch(
          addMsg({
            name: "aimer aie",
            message: liveMsg,
          })
        );
        setLiveMsg("");
        }}>
        <input className=" text-sm ml-2 col-span-10  rounded-tl-lg rounded-bl-lg px-2 outline-none" type="text" placeholder="Live Chat" value={liveMsg} onChange={(e) => {setLiveMsg(e.target.value)}}
          />

        <button className=" w-16 rounded-md border border-gray-300 text-gray-500 text-sm col-span-1">Send</button>

      </form>
    </>
  )
}

export default LiveChat
