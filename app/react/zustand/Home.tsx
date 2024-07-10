import Counter from "./Counter";
import useAuthStore from "./store/authStore";

export default function Home(){
    const {user} = useAuthStore();

    return <div className="p-4">
        <p>User: {user}</p>
        <Counter />
    </div>
}