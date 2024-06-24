const FormArea = () => {
  return (
    <div className="px-10 py-6">
      <h1 className="text-2xl font-bold">SPLIT A BILL WITH FRIENDNAME</h1>
      <div className="flex flex-col">
        <div className="flex flex-row mt-6 py-3 gap-2 font-medium items-center ">
          <span className="text-4xl">💰</span>
          <h3 className="text-lg">Bill value</h3>
          <input type="text" className="ml-auto py-2 rounded-md" />
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center ">
          <span className="text-4xl">💸</span>
          <h3 className="text-lg">Your expense</h3>
          <input type="text" className="ml-auto py-2 rounded-md" />
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center ">
          <span className="text-4xl">👤</span>
          <h3 className="text-lg">Friend&apos;s expense</h3>
          <input
            type="text"
            value="0"
            className="border box ml-auto py-2 rounded-md bg-slate-200 text-center"
            disabled
          />
          {/* this input's the problem! */}
        </div>
        <div className="flex flex-row py-3 gap-2 font-medium items-center ">
          <span className="text-4xl">🧐</span>
          <h3 className="text-lg">Who&apos;s paying?</h3>
          <select className="ml-auto py-2 rounded-md">
            <option>Me</option>
            <option>Friend</option>
          </select>
        </div>
        <div>
          <span>🧐</span>
          <h3>Who&apos;s paying?</h3>
          <select>
            <option>Me</option>
            <option>Friend</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FormArea;
