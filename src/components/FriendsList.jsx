import Friend from "./Friend";

const FriendsList = ({ myFriends, selectedFriend, setSelectedFriend }) => {
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
        />
      ))}
    </div>
  );
};
export default FriendsList;
