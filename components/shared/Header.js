import Link from "next/link";

export default function Header() {

        return (
                <>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/">
                                <a>About</a>
                        </Link>

			<Link href="/">
                                <a>Portfolios</a>
                        </Link>
			<Link href="/">
                                <a>Blogs</a>
                        </Link>
			<Link href="/">
                                <a>Cv</a>
                        </Link>

                </>
        );
}

