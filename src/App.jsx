import AddFriend from "./components/AddFriend";
import FormArea from "./components/FormArea";
import FriendsList from "./components/FriendsList";
import { useState } from "react";

const App = () => {
  const [myFriends, setMyFriends] = useState([
    {
      img: "https://i.pravatar.cc/298",
      name: "Gointer",
      owed: 0,
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Farter",
      owed: -7,
    },
    {
      img: "https://i.pravatar.cc/299",
      name: "Durk",
      owed: 12,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-4 w-[60rem] rounded shadow">
        <div className="w-full md:w-2/5 bg-gray-100 p-4 rounded m-2">
          <FriendsList
            myFriends={myFriends}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
          <AddFriend setMyFriends={setMyFriends} />
        </div>
        <div className="w-full md:w-3/5 bg-orange-100 p-4 rounded m-2">
          <FormArea
            myFriends={myFriends}
            setMyFriends={setMyFriends}
            selectedFriend={selectedFriend}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
