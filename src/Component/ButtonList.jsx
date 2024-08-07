import Button from './Button';

const lists = ['All' ,'Trailers','Shorts', 'Music', 'Cooking' , 'Movies', 'Entertainment' , 'Pop' , 'Drawing'  , 'EDM' , 'DSA'  , 'New to you' , 'Blogs'];
const ButtonList = () => {
  return (
    <div className='flex flex-wrap overflow-x-scroll overflow-hidden hide-scrollbar mx-2' >
    <div className= ' flex'> 
      {lists.map(list => {
        return <Button key={list} name  = {list}/>
      })}

    </div>
    </div>
  )
}

export default ButtonList;
