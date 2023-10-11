import Head from 'next/head';
import Navbar from '@/components/Navbar'

export default function Layout({ children }) {
    return (
        <div className="container-fluid bg-dark">
            <Head>
                <title>My Next.js App with Bootstrap</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>

            <Navbar /> 

            <div className="container mt-5">
                {children}
            </div>
        </div>
    );
}