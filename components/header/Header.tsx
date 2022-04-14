import Image from "next/image";
import Link from "next/link";
import Styles from "./Header.module.css";

import { IconBookmark, IconHome } from "@/icons";


export function Header() {
    return (
        <header>
            <nav className={Styles.nav}>
                <div className={Styles.brand}>
                   <Link href="/">
                        <a>
                            <Image src="/images/home/logo.png" width={45} height={36} alt="OnFood" />
                            <span>OnFood</span>
                        </a>
                   </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <a>
                                <IconHome />
                                Home
                            </a>
                        </Link>
                    </li>

                    <li>
                        <Link href="/favorito">
                            <a>
                                <IconBookmark />
                                Favoritos
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}