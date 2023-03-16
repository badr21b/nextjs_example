import Script from 'next/script';

export default function ChooseTicket() {
    return (
        <div>
            <h1 className="title">
                Choose Tickets Page!
                Go to <Link href="/booking/options">this page!</Link>
            </h1>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

        </div>
    );
}


import Link from 'next/link';

