const commentsData = [
    {
        name:'Aimer aie',
        text:' La french eau de parfum unisexual',
        replies:[
            {
                name:'Aimer aie',
                text:' La french eau de parfum unisexual',
                replies:[]
            }
        ]
    }, 
    {
        name:'Aimer aie',
        text:' La french eau de parfum unisexual',
        replies:[
            {
                name:'Aimer aie',
                text:' La french eau de parfum unisexual',
                replies:[
                    {
                        name:'Aimer aie',
                        text:' La french eau de parfum unisexual',
                        replies:[],
                    },
                    {
                        name:'Aimer aie',
                        text:' La french eau de parfum unisexual',
                        replies:[
                            {
                                name:'Aimer aie',
                                text:' La french eau de parfum unisexual',
                                replies:[
                                    {
                                        name:'Aimer aie',
                                        text:' La french eau de parfum unisexual',
                                        replies:[
                                            {
                                                name:'Aimer aie',
                                                text:' La french eau de parfum unisexual',
                                                replies:[],
                                            },
                                            
                                        ]
                                    }
                                ],
                            },
                            
                        ]
                    }
                ]
            }
        ]
    },   
    {
        name:'Aimer aie',
        text:' La french eau de parfum unisexual',
        replies:[]
    }, 
    {
        name:'Aimer aie',
        text:' La french eau de parfum unisexual',
        replies:[]
    }, 
    {
        name:'Aimer aie',
        text:' La french eau de parfum unisexual',
        replies:[]
    }, 
]

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

const CommentSection = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">comments</h1>
      <CommentList comments = {commentsData}/>
    </div>
  )
}

export default CommentSection
