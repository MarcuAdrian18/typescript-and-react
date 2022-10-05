import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearchClass extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });

    this.setState({ user: foundUser });
  };

  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h2>User Search</h2>
        <input
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Find User</button>
        <div>
          <h3>Username: {user && user.name}</h3>
          <h3>User Age: {user && user.age}</h3>
        </div>
      </div>
    );
  }
}

export default UserSearchClass;
