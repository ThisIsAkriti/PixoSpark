import { useSelector } from "react-redux"


const Profile = () => {

  const isProfileOpen = useSelector(store => store.profile.isProfileOpen);
  if(!isProfileOpen) return null;
  
  return (
    <div className="absolute flex justify-end h-16 w-full ">
      <div className=" flex w-44 px-3 border-gray-300 bg-slate-50 border-2  rounded-md items-center justify-center space-x-3">
        <img src="/images/hiIcon.png" alt="hi" className=" size-10" />
        <img src="/images/greeting.png" alt="greet" className=" size-10"  />
        <img src="/images/thankyou.png" alt="thanks" className=" size-10"  />
      </div>
    </div>
  )
}

export default Profile
