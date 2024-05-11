import Button from './Button';

const lists = ['All' ,'Trailers',  'Cooking' , 'Entertainment' , 'Pop' , 'Drawing'  , 'EDM' , 'DSA'  , 'New to you'];
const ButtonList = () => {
  return (
    <div className='flex w-[1150px] overflow-x-scroll hide-scrollbar'>
    <div className= ' flex'> 
      {lists.map(list => {
        return <Button key={list} name  = {list}/>
      })}

    </div>
    </div>
  )
}

export default ButtonList;
