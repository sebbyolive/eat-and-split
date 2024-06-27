const Friend = ({
  index,
  name,
  img,
  setSelectedFriend,
  myFriends,
  setMyFriends,
  selectedFriend,
}) => {
  const handleClick = () => {
    setSelectedFriend(index);
  };

  const handleRemoveFriend = () => {
    const filteredUsers = myFriends.filter((friend, idx) => idx !== index);
    setMyFriends(filteredUsers);
  };

  const statedOwed =
    myFriends[index].owed === 0
      ? "You're even"
      : myFriends[index].owed > 0
      ? `${myFriends[index].name} owes you $${myFriends[index].owed}`
      : myFriends[index].owed < 0
      ? `You owe ${myFriends[index].name} $${myFriends[index].owed * -1}`
      : "ERROR";

  return (
    <div
      className={`flex flex-row items-center py-3 gap-3 rounded-xl px-2 ${
        index === selectedFriend && "bg-orange-200"
      }`}
    >
      <img src={img} alt="friend image" className="w-12 rounded-full" />
      <div className="flex flex-col px-4">
        <h2 className="font-bold">{name}</h2>
        <p
          className={`text-sm ${
            myFriends[index].owed < 0
              ? "text-red-600"
              : myFriends[index].owed > 0
              ? "text-green-500"
              : ""
          }`}
        >
          {statedOwed}
        </p>
      </div>
      <button
        onClick={handleClick}
        className="bg-orange-400 w-[4rem] rounded-md p-1 text-sm font-bold ml-auto"
      >
        Select
      </button>
      <button onClick={handleRemoveFriend}>x</button>
    </div>
  );
};
export default Friend;
