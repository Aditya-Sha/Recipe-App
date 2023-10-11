import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/">
                <span className="navbar-brand cursor-pointer">My App</span>
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link href="/">
                            <span className="nav-link cursor-pointer">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <span className="nav-link cursor-pointer">About</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/food">
                            <span className="nav-link cursor-pointer">Food Search</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
