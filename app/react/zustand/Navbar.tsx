import useCounterStore from "./store/counterStore"

export default function Navbar(){
    const {counter} = useCounterStore();

    return <div>
        <h3>Navbar</h3>
        <p>Counter value: {counter}</p>
    </div>
}