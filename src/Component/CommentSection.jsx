import { useSearchParams } from "react-router-dom";
import { comments_API } from "../utils/constants";
import { useEffect, useState } from "react";
import moment from "moment";

{/*


const Comment = ({ data }) => {
    const {name , text , replies} = data;
   return(
    <div className="mt-4  flex bg-gray-100 py-2 shadow-md">
        <img className=" w-10 h-10 mx-4" src="./images/profile.png" alt="pfp" />
        <div className="text-sm ">
            <p className="font-semibold">{name}</p>
            <p>{text}</p>
        </div>
        
    </div>
   )
}

const CommentList = ({comments}) => {
    return comments.map((comment , index) => (
        <div key={index} >
            <Comment data={comment}/> 
            <div className="pl-5 border border-l-gray-400 ml-6">
               <CommentList comments={comment.replies}/>
            </div>
        </div>  
    )
); 
};
*/}

const CommentSection = () => {
    const [CommentData, setCommentData] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getCommentsData();
    } , [])


    const getCommentsData = async() => {
        
        const comment_url = comments_API + searchParams.get('v');
        const data = await fetch(comment_url);
        const json = await data.json();
        console.log(json.items)
        setCommentData(json.items);
    }
  
    return (
        <div>
            {CommentData.map((item , index) => {
                return (
                    <div key={index} className="mt-4  flex bg-gray-100 py-2 shadow-md">
                        <img className=" w-10 h-10 mx-4" src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="pfp" />
                        <div className="text-sm space-y-1">
                            <div className="flex space-x-4">
                                <p className="font-semibold text-xs">{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
                                <p className="text-xs text-gray-500">{moment(item.snippet.topLevelComment.snippet.updatedAt).fromNow()}</p>
                            </div>
                            <p className="text-gray-700">{item.snippet.topLevelComment.snippet.textOriginal}</p>
                            
                        </div>
                    
                    </div>
                )
            })}
        </div>
       
    )
}

export default CommentSection
