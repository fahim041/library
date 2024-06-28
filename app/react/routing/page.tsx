'use client';
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("./Wrapper"), {ssr: false});

export default function RoutingPage() {
  return (
    <div className="p-4">
      <HomeComponent />
    </div>
  );
}