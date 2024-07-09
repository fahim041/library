import AuthStatus from "./AuthStatus";

export default function Navbar() {
  return (
    <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <div>React Context</div>
      <div>
        <AuthStatus />
      </div>
    </div>
  );
}
