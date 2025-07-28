import Link from "next/link";
import "../globals.css";
import "./navbar.css";

export default function Navbar(){
  return (
    <div className = "navbar">
      <Link href = "/">Home</Link>
      <Link href = "/jewelry">Jewelry</Link>
    </div>
  );
}