import { useContext } from "react";
import AuthStatus from "./AuthStatus";
import taskContext from "./context/taskContext";

export default function Navbar() {
  const {tasks} = useContext(taskContext);

  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div>React Context</div>
      <div>Task Count: {tasks.length}</div>
      <div>
        <AuthStatus />
      </div>
    </div>
  );
}
