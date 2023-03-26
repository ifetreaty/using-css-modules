import React, { useState } from "react";

import Card from "../UI/Card";
import styles from "./UserList.module.css"

const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul className="user-list">
        {props.users.map((user) => (
          <li className="user-item" key={user.id} id={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
