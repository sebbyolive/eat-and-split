import Friend from "./Friend";

const FriendsList = ({
  myFriends,
  selectedFriend,
  setSelectedFriend,
  setMyFriends,
}) => {
  if (myFriends.length === 0) {
    return <p>No friends to display.</p>;
  }
  return (
    <div className="p-4">
      {myFriends.map((friend, index) => (
        <Friend
          key={index}
          index={index}
          name={friend.name}
          img={friend.img}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          myFriends={myFriends}
          setMyFriends={setMyFriends}
        />
      ))}
    </div>
  );
};
export default FriendsList;
