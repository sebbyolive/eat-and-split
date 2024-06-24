import AddFriend from "./components/AddFriend";
import FormArea from "./components/FormArea";
import FriendsList from "./components/FriendsList";
import { useState } from "react";

const App = () => {
  const [myFriends, setMyFriends] = useState([
    {
      img: "https://i.pravatar.cc/48",
      name: "Fart",
      owed: 0,
    },
    {
      img: "https://i.pravatar.cc/48",
      name: "Shit",
      owed: -7,
    },
    {
      img: "https://i.pravatar.cc/48",
      name: "Pee",
      owed: 12,
    },
  ]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-4 w-[60rem] rounded shadow">
        <div className="w-full md:w-2/5 bg-gray-100 p-4 rounded m-2">
          <FriendsList myFriends={myFriends} />
          <AddFriend setMyFriends={setMyFriends} />
        </div>
        <div className="w-full md:w-3/5 bg-orange-100 p-4 rounded m-2">
          <FormArea myFriends={myFriends} setMyFriends={setMyFriends} />
        </div>
      </div>
    </div>
  );
};
export default App;
