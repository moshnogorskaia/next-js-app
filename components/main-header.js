import Link from "next/link";
import logo from "@/assets/logo.png";

export default function MainHeader() {
  return <header>
    <Link href="/">
        <img src={logo.src} alt='NextLevel Food logo' />
        NextLevel Food
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <Link href="/share">Share a Meal</Link>
        </li>
        <li>
          <Link href="/meals/new-meal">New meal</Link>
        </li>
      </ul>
    </nav>
  </header>;
}
