import Button from './Button';

const lists = ['All' ,'Trailers','Shorts', 'Music', 'Cooking' , 'Movies', 'Entertainment' , 'Pop' , 'Drawing'  , 'EDM' , 'DSA'  , 'New to you'];
const ButtonList = () => {
  return (
    <div className='flex md:w-[1500px] sm:w-[1000px] w-[450px] overflow-x-scroll hide-scrollbar '>
    <div className= ' flex'> 
      {lists.map(list => {
        return <Button key={list} name  = {list}/>
      })}

    </div>
    </div>
  )
}

export default ButtonList;
