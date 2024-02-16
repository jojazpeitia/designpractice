'use client'
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className='flex items-center justify-center'>
            <nav className='text-black underline'> 
                <ul className='flex justify-center items-center space-x-8'>
                    <li>
                        <Link href={'/design1'}> design1 </Link>
                    </li>
                    <li>
                        <Link href={'/design2'}> design2 </Link>
                    </li>
                    <li>
                        <Link href={'/design3'}> design3 </Link>
                    </li>
                    <li>
                        <Link href={'/design4'}> design4 </Link>
                    </li>
                    <li>
                        <Link href={'/design5'}> design5 </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}