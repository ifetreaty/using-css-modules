import React, { useState } from "react";
import UserInput from "./components/Users/UserInput";
import UserList from "./components/Users/UserList";

function App() {
  const [userNames, setUserNames] = useState([]);

  const handleAddUser = (enteredName, enteredAge) => {
    setUserNames((prevUsers) => {
      const updatedUsers = [
        ...prevUsers,
        { name: enteredName, age: enteredAge, id: Math.random().toString(), },
      ];
      // updatedUsers.unshift({
      //   name: `${enteredName}`,
      //   age: `${enteredAge}${" years old"}`,
      //   id: Math.random().toString(),
      // });
      return updatedUsers;
    });
  };

  return (
    <div>
      <section>
        <UserInput onAddUser={handleAddUser} />
      </section>
      <section>
        <UserList users={userNames} />
      </section>
    </div>
  );
}

export default App;
