import React, {Component} from 'react';
import './../asset/css/css.css';
import {NavBar, Icon} from 'antd-mobile';
import {SearchBar, Button, WhiteSpace, WingBlank} from 'antd-mobile';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="哈尔滨"
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                        <Icon key="1" type="ellipsis"/>,
                    ]}
                >
                    <SearchBar placeholder="输入搜索内容" maxLength={8}/>
                </NavBar>
                <WhiteSpace/>
                <Grid data={data} isCarousel />

            </div>
        )
    }
}

export default App