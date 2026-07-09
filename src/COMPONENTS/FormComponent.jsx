import React, { useState } from "react";

function FormComponent() {
  const [btn, setBtn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [userArr, setArr] = useState([]);

  function handleUser(e) {
    const value = e.target.value;
    const name = e.target.name;
    setUser({ ...user, [name]: value });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("Please Fill all fields");
      return;
    } 
      const userObj = { ...user };
      console.log([...userArr, userObj]);
      setArr([...userArr, userObj]);


    setUser({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <>
      <div
        className={` transition-all duration-300 ${btn ? "bg-gray-200" : "bg-white"} h-[100vh]`}
      >
        <nav
          className={`transition-all duration-300 ${btn ? "bg-[#1d1d1d]" : "bg-indigo-500"} text-white flex p-4`}
        >
          <div className="navlist wrapper flex items-center medium justify-between">
            <h1 className="sm:text-[22px] text-[18px] font-medium">
              Form Handling
            </h1>
            <button className="bg-white w-9 h-5 sm:w-13 sm:h-7 rounded-2xl px-1">
              <div
                onClick={() => setBtn(!btn)}
                className={`transiton-all duration-300 ${btn ? "bg-[#1d1d1d]" : "bg-indigo-500"} ${btn ? "translate-x-5" : "translate-0"} ball sm:h-6 sm:w-6 w-3 h-3 rounded-full`}
              ></div>
            </button>
          </div>
        </nav>

        <div className="wrapper form flex justify-center my-5">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium" htmlFor="name">
                Enter Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={user.name}
                className={`border-1 sm:w-[340px] w-[300px] px-3 py-2 rounded-3xl ${btn ? "border-white" : "border-gray-300"} bg-white outline-none `}
                id="name"
                onChange={handleUser}
                name="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium" htmlFor="email">
                Enter Email
              </label>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                value={user.email}
                className={`border-1 sm:w-[340px] w-[300px] px-3 py-2 rounded-3xl ${btn ? "border-white" : "border-gray-300"} bg-white outline-none `}
                id="email"
                onChange={handleUser}
                name="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-medium" htmlFor="password">
                Enter Password
              </label>
              <input
                type="password"
                placeholder="*********"
                value={user.password}
                className={`border-1 sm:w-[340px] w-[300px] px-3 py-2 rounded-3xl ${btn ? "border-white" : "border-gray-300"} bg-white outline-none `}
                id="password"
                onChange={handleUser}
                name="password"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white font-medium py-1 px-3 rounded-full w-fit hover:bg-green-700 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="wrapper">
          <h1 className="text-2xl sm:mt-5 mt-10 font-bold">Users</h1>
          <div className="user-container flex flex-wrap justify-start gap-5">
            {userArr.map((myUsers) => {
              console.log(myUsers);

              return (
                <div className="card flex flex-col border-1 w-[300px] p-5 rounded-3xl mt-5 border-gray-100 bg-white shadow-2xl gap-2">
                  <h1 className="font-medium">{myUsers.name}</h1>
                  <p className="italic">{myUsers.email}</p>
                  <p
                    className={`transition-all duration-300 ${btn ? "bg-[#1d1d1d]" : "bg-indigo-500"} w-fit text-white px-3 py-1 text-[14px] rounded-2xl`}
                  >
                    {myUsers.password}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FormComponent;
