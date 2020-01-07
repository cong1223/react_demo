import Head from "next/head";
import Myheader from "../components/myheader";
import '../static/test.css'
import {Button} from "antd";


function Header() {
    return (
        <>
            <Head>
                <title>这是title</title>
                <meta charSet="utf-8"/>
            </Head>
            <div>try try...</div>
            {/*<Myheader />*/}
            {/*<div>try try...</div>*/}
            {/*<Button>antd的按钮</Button>*/}
        </>
    )
}

export default Header;