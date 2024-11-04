import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const friends = initialFriends;

  function handleShowAddFriendForm() {
    setIsOpen((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {isOpen && <FormAddFriend isOpen={isOpen} />}
        <Button onClick={handleShowAddFriendForm}>
          {isOpen ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ isOpen }) {
  return (
    <form className="form-add-friend">
      <label for="friend-name">🧑‍🤝‍🧑 Name</label>
      <input type="text" name="friend-name" />

      <label for="image-url">🖼️Image url</label>
      <input type="text" name="image-url" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form>
      <label>💰 Bill value</label>
      <input type="text"></input>

      <label>🧍 Your expense</label>
      <input type="text"></input>

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text"></input>

      <label>🤑 who is paying the bill expense</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
