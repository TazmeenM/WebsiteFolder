import Link from "next/link";
import "./navbar.css";

export default function Navbar(){
  return (
    <div className = "navbar">
      <Link href = "/">Home</Link>
      <Link href = "../jewelry">Jewelry</Link>
      <Link href = "paintings.html">Paintings</Link>
    </div>
  );
}