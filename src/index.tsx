import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import EventComponent from "./events/EventComponent";

import GuestList from "./state/GuestList";
import { UserSearch } from "./refs/UserSearch";

const container = document.getElementById("root");
const root = createRoot(container!);

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

root.render(<App />);
