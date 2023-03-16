import Image from "next/image";
import profile from '../../../public/images/profile.jpg'

export default function FirstPost() {
    return (
        <div>
            <h1 className="title">
                Animal Families List Page!
                Read <Link href="/posts/first-post">this page!</Link>
            </h1>

            <div>
                <Image
                    src="/images/profile.jpg" // Route of the image file
                    height={144} // Desired size with correct aspect ratio
                    width={144} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
            </div>
        </div>
);
}


import Link from 'next/link';

