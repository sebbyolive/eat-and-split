const Friend = () => {
  return (
    <div className="flex flex-row items-center py-3">
      <img
        src="https://i.pravatar.cc/300
"
        alt="friend image"
        className="w-12 rounded-full"
      />
      <div className="flex flex-col px-4">
        <h2 className="font-bold">Farter</h2>
        <p className="text-sm">Fart in my mouth</p>
      </div>
      <button className="bg-orange-400 w-[4rem] rounded-md p-1 text-sm font-bold ml-auto">
        Select
      </button>
    </div>
  );
};
export default Friend;
