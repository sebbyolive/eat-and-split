// import { useState } from "react";

// const FormArea = ({ myFriends, selectedFriend, setMyFriends }) => {
//   const [billTotal, setBillTotal] = useState(0);
//   const [myExpense, setMyExpense] = useState(0);
//   const [imPaying, setImPaying] = useState(true);
//   const friendsExpense = billTotal - myExpense;

//   const changeHandler = (e) => {
//     const { name, value } = e.target;

//     if (name === "billTotal") {
//       setBillTotal(value);
//     } else if (name === "myExpense") {
//       setMyExpense(value);
//     } else if (name === "imPaying") {
//       setImPaying(value === "Me");
//     }
//   };

//   const clickHandler = () => {
//     const curOwed = myFriends[selectedFriend].owed;
//     const owed = imPaying
//       ? curOwed - friendsExpense
//       : curOwed + Number(myExpense);

//     const newList = myFriends.map((friend, index) => {
//       if (index === selectedFriend) {
//         return {
//           ...friend,
//           owed: owed,
//         };
//       }
//       return friend;
//     });

//     setMyFriends(newList);
//     setBillTotal(() => 0);
//     setMyExpense(0);
//     setImPaying(true);
//   };

//   return (
//     <div className="px-10 py-6">
//       <h1 className="text-2xl font-bold">
//         SPLIT A BILL WITH{" "}
//         {(selectedFriend === 0) | selectedFriend
//           ? myFriends[selectedFriend].name.toUpperCase()
//           : "WHO?"}
//       </h1>
//       <div className="flex flex-col">
//         <div className="flex flex-row mt-6 py-3 gap-2 font-medium items-center ">
//           <span className="text-4xl">💰</span>
//           <h3 className="text-lg">Bill value</h3>
//           <input
//             onChange={changeHandler}
//             type="number"
//             name="billTotal"
//             value={billTotal}
//             className="ml-auto py-2 rounded-md"
//           />
//         </div>
//         <div className="flex flex-row py-3 gap-2 font-medium items-center ">
//           <span className="text-4xl">💸</span>
//           <h3 className="text-lg">Your expense</h3>
//           <input
//             onChange={changeHandler}
//             name="myExpense"
//             value={myExpense}
//             type="number"
//             className="ml-auto py-2 rounded-md"
//           />
//         </div>
//         <div className="flex flex-row py-3 gap-2 font-medium items-center ">
//           <span className="text-4xl">👤</span>
//           <h3 className="text-lg">Friend&apos;s expense</h3>
//           <input
//             type="number"
//             value={friendsExpense}
//             className="border box ml-auto py-2 rounded-md bg-slate-200 text-center"
//             disabled
//           />
//         </div>
//         <div className="flex flex-row py-3 gap-2 font-medium items-center">
//           <span className="text-4xl">🧐</span>
//           <h3 className="text-lg">Who&apos;s paying?</h3>
//           <select
//             onChange={changeHandler}
//             value={imPaying ? "Me" : "Friend"}
//             className="ml-auto py-2 rounded-md w-2/5"
//             name="imPaying"
//           >
//             <option>Me</option>
//             <option>Friend</option>
//           </select>
//         </div>
//         <button
//           onClick={clickHandler}
//           className="bg-orange-400 w-[6rem] rounded-md p-1 text-sm font-bold ml-auto"
//         >
//           Split Bill
//         </button>
//       </div>
//     </div>
//   );
// };
// export default FormArea;

import { useState } from "react";

const FormArea = ({ myFriends, selectedFriend, setMyFriends }) => {
  const [billTotal, setBillTotal] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [imPaying, setImPaying] = useState(true);
  const friendsExpense = billTotal - myExpense;

  // Check if there is a valid selected friend
  const isValidFriendSelected =
    typeof selectedFriend === "number" &&
    selectedFriend >= 0 &&
    selectedFriend < myFriends.length;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "billTotal") {
      setBillTotal(parseFloat(value));
    } else if (name === "myExpense") {
      setMyExpense(parseFloat(value));
    } else if (name === "imPaying") {
      setImPaying(value === "Me");
    }
  };

  const clickHandler = () => {
    if (!isValidFriendSelected) return; // Prevent action if no valid friend is selected

    const curOwed = myFriends[selectedFriend].owed;
    const owed = imPaying
      ? curOwed - friendsExpense
      : curOwed + Number(myExpense);

    const newList = myFriends.map((friend, index) => {
      if (index === selectedFriend) {
        return { ...friend, owed };
      }
      return friend;
    });

    setMyFriends(newList);
    setBillTotal(0);
    setMyExpense(0);
    setImPaying(true);
  };

  if (!isValidFriendSelected) {
    return (
      <div>
        Please select a friend to split the bill with, or add friends if none
        are listed.
      </div>
    );
  }

  const friendName = myFriends[selectedFriend].name;

  return (
    <div className="px-10 py-6">
      <h1 className="text-2xl font-bold">
        SPLIT A BILL WITH {friendName.toUpperCase()}
      </h1>
      <div className="flex flex-col">
        <div className="flex flex-row mt-6 py-3 gap-2 font-medium items-center">
          <span className="text-4xl">💰</span>
          <h3 className="text-lg">Bill value</h3>
          <input
            onChange={changeHandler}
            type="number"
            name="billTotal"
            value={billTotal}
            className="ml-auto py-2 rounded-md"
          />
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center">
          <span className="text-4xl">💸</span>
          <h3 className="text-lg">Your expense</h3>
          <input
            onChange={changeHandler}
            name="myExpense"
            value={myExpense}
            type="number"
            className="ml-auto py-2 rounded-md"
          />
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center">
          <span className="text-4xl">👤</span>
          <h3 className="text-lg">
            {myFriends[selectedFriend].name}&apos;s expense
          </h3>
          <input
            type="number"
            value={friendsExpense}
            className="border box ml-auto py-2 rounded-md bg-slate-200 text-center"
            disabled
          />
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center">
          <span className="text-4xl">🧐</span>
          <h3 className="text-lg">Who&apos;s paying?</h3>
          <select
            onChange={changeHandler}
            value={imPaying ? "Me" : "Friend"}
            className="ml-auto py-2 rounded-md w-2/5"
            name="imPaying"
          >
            <option>Me</option>
            <option>Friend</option>
          </select>
        </div>
        <button
          onClick={clickHandler}
          className="bg-orange-400 w-[6rem] rounded-md p-1 text-sm font-bold ml-auto"
        >
          Split Bill
        </button>
      </div>
    </div>
  );
};

export default FormArea;
