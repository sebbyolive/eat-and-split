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
    <div className="bg-gray-100 flex flex-col items-center min-h-screen">
      <img
        className="w-20 mt-8"
        src="https://www.pngall.com/wp-content/uploads/14/Dollar-Sign-PNG-Photos.png"
        alt=""
      />
      <span className="font-black text-4xl italic mb-4">Bill Splitter</span>
      <div className="container mx-auto flex flex-col md:flex-row bg-white p-4 md:w-full lg:w-[60rem] rounded shadow">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2 p-4 rounded m-2 bg-gray-100">
            <FriendsList
              myFriends={myFriends}
              setMyFriends={setMyFriends}
              selectedFriend={selectedFriend}
              setSelectedFriend={setSelectedFriend}
            />
            <AddFriend setMyFriends={setMyFriends} myFriends={myFriends} />
          </div>

          <div className="w-full md:w-1/2 p-4 rounded m-2 bg-orange-100">
            <FormArea
              myFriends={myFriends}
              setMyFriends={setMyFriends}
              selectedFriend={selectedFriend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
