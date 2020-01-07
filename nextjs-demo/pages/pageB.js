import Link from 'next/link'
import {withRouter} from "next/router";

import React from 'react';

function PageB({router}) {
    return (
        <div>
            <div>pageB页面</div>
            <div>接收到的query参数id为{router.query.id}</div>
            <Link href="/"><a>返回首页</a></Link>
        </div>
    );
}

export default withRouter(PageB);