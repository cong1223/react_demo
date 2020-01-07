import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'

function gotoPageA() {
    Router.push({
         pathname: '/pageA',
         query: {
              id: '001'
         }
    })
}

const Home = () => (
    <>
        <div>我是首页</div>
        {/*history模式*/}
        <div><Link href="/pageA?id=123"><a>去pageA页面</a></Link></div>
        <div><Link href="/pageB?id=456"><a>去pageB页面</a></Link></div>
        {/*hash模式*/}
        <div>
            <Link href="#pageA"><a>hash模式跳转</a></Link>
        </div>
        <button onClick={()=>Router.push('/pageA')}>跳转到pageA</button>
        <button onClick={()=>Router.push('/pageB')}>跳转到pageB</button>
        <button onClick={()=>Router.push('/example')}>跳转到example</button>
        <button onClick={()=>Router.push('/time')}>跳转到time</button>
        <button onClick={()=>Router.push('/header')}>跳转到header</button>
        <button onClick={gotoPageA}>编程式跳转</button>
    </>
)


Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
})

Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化,参数为:',...args)
})

Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
})

Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
})

Router.events.on('hashChangeStart',(...args)=>{
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:',...args)
})

Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:',...args)
})


export default Home
