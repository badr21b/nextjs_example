import Link from 'next/link';
import Head from "next/head";
import Script from "next/script";
import Layout from '../../components/layout';

import variables from '../../styles/variables.module.scss'


export default function AnotherPost() {
    return (
        <Layout>
            <Head>
                <title>Another Post</title>
            </Head>
            <h1>Another Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
