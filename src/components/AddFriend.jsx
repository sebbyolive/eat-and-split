import { useState } from "react";

const AddFriend = ({ myFriends, setMyFriends }) => {
  const [addingFriend, setAddingFriend] = useState(false);
  const [newFriendName, setNewFriendName] = useState("");
  const [newFriendImg, setNewFriendImg] = useState("https://i.pravatar.cc/300");

  const clickHandler = () => {
    setAddingFriend((prev) => !prev);
    setNewFriendName("");
    if (addingFriend) {
      const newFriend = { name: newFriendName, img: newFriendImg, owed: 0 };
      setMyFriends([...myFriends, newFriend]);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    name === "name" && setNewFriendName(value);
    name === "img" && setNewFriendImg(value);
  };

  return (
    <div className="flex flex-col mt-2">
      {addingFriend && (
        <div className="flex flex-col justify-end gap-y-2">
          <input
            onChange={changeHandler}
            name="name"
            className="py-1 ml-auto px-4"
            placeholder="name"
            value={newFriendName}
            type="text"
          />
          <input
            className="py-1 ml-auto px-4"
            onChange={changeHandler}
            name="img"
            value={newFriendImg}
            type="text"
          />
        </div>
      )}
      <button
        onClick={clickHandler}
        className={`w-[6rem] rounded-md p-1 text-sm font-bold ml-auto ${
          !addingFriend ? "bg-orange-400" : "bg-green-400"
        }`}
      >
        {!addingFriend ? "Add Friend" : "Submit!"}
      </button>
      {addingFriend && (
        <button
          onClick={() => setAddingFriend(false)}
          className="flex ml-auto py-4"
        >
          Cancel
        </button>
      )}
    </div>
  );
};
export default AddFriend;
