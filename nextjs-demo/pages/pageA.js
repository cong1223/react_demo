import Link from 'next/link'
import {withRouter} from 'next/router'
import React from 'react';
import axios from 'axios'

function PageA({router,list}) {
    return (
        <div>
            <div>pageA页面{router.query.id}</div>
            <div>请求到的数据:{list}</div>
            <Link href="/"><a>返回首页</a></Link>
        </div>
    );
}
// PageA.getInitialProps = async ()=>{
//     const promise =new Promise((resolve)=>{
//         axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
//             (res)=>{
//                 console.log('远程数据结果：',res)
//                 resolve(res.data.data)
//             }
//         )
//     })
//     return await promise
// }
export default withRouter(PageA);