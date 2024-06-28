import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("./Wrapper"), {ssr: false});

export default function RoutingPage() {
  return (
    <div className="p-4">
      <h1>Routing App</h1>
      <HomeComponent />
    </div>
  );
}