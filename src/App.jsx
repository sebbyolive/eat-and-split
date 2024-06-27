import AddFriend from "./components/AddFriend";
import FormArea from "./components/FormArea";
import FriendsList from "./components/FriendsList";
import { useState } from "react";

const App = () => {
  const [myFriends, setMyFriends] = useState([
    {
      img: "https://i.pravatar.cc/298",
      name: "Steve",
      owed: -100,
    },
    {
      img: "https://i.pravatar.cc/300",
      name: "Henry",
      owed: -50,
    },
    {
      img: "https://i.pravatar.cc/299",
      name: "Qiu",
      owed: 50000,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState(
    myFriends.length > 0 ? 0 : undefined
  );

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-4 w-[60rem] rounded shadow">
        <div className="w-full md:w-3/5 bg-gray-100 p-4 rounded m-2">
          <FriendsList
            myFriends={myFriends}
            setMyFriends={setMyFriends}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
          <AddFriend setMyFriends={setMyFriends} myFriends={myFriends} />
        </div>

        <div className="w-full md:w-3/5 bg-orange-100 p-4 rounded m-2 ml-auto">
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
