import AuthStatus from "./AuthStatus";
import { useTask } from "./context/TaskContext";

export default function Navbar() {
  // const {tasks} = useContext(taskContext);
  const {tasks} = useTask();

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
