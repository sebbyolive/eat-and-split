const Friend = ({ index, name, img, setSelectedFriend, myFriends }) => {
  const handleClick = () => {
    setSelectedFriend(index);
  };

  return (
    <div className="flex flex-row items-center py-3">
      <img src={img} alt="friend image" className="w-12 rounded-full" />
      <div className="flex flex-col px-4">
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm">{myFriends[index].owed}</p>
      </div>
      <button
        onClick={handleClick}
        className="bg-orange-400 w-[4rem] rounded-md p-1 text-sm font-bold ml-auto"
      >
        Select
      </button>
    </div>
  );
};
export default Friend;
