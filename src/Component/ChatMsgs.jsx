
const ChatMsgs = ({name, messages}) => {
    return(
        <div>

            <div className="flex items-center shadow-gray-300 shadow-sm py-1 mx-2 my-1" >
                <img src="/images/propic.jpg"
                 className=" w-8 h-8 rounded-full object-cover mx-2"
                 alt="profile pic" 
                />
               <span className="font-bold px-2" >{name}</span>
               <span>{messages}</span>
            </div>
            
        </div>
    )
}

export default ChatMsgs;