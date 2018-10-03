import React, {Component} from 'react';
import './../asset/css/css.css';
import {SearchBar, Button, WhiteSpace, WingBlank,Flex,Grid,ListView,NavBar, Icon} from 'antd-mobile';
import 'whatwg-fetch';
import Container from './Container';
import Product from './Product';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"酒店"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"娱乐"
                },
                {
                    icon:require('./../asset/img/img5.png'),
                    text:"外卖"
                },
                {
                    icon:require('./../asset/img/img6.png'),
                    text:"ktv"
                },
                {
                    icon:require('./../asset/img/img7.png'),
                    text:"周边游"
                },
                {
                    icon:require('./../asset/img/img8.png'),
                    text:"丽人"
                },
                {
                    icon:require('./../asset/img/img9.png'),
                    text:"小吃"
                },
                {
                    icon:require('./../asset/img/img10.png'),
                    text:"机票"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"电影"
                }
            ],
            product:[]
        }
    }
    componentWillMount(){
        fetch('http://www.xiechenxi.cn/')
            .then((response) => {
                return response.json()
            }).then((data) => {
            this.setState({
                product:data
            })
            console.log(data)
        })
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
                <Grid data={this.state.data} isCarousel hasLine="true" columnNum={5}/>
                <WhiteSpace/>
                <Flex className="content">
                    <Flex.Item>
                        <p>我们约会吧</p>
                        <br></br>
                        <p>恋人家人好朋友</p>
                        <img src={ require("./../asset/img/activity1.png") } className="img1"/>
                    </Flex.Item>
                    <Flex.Item>
                        <p>低价超值</p>
                        <br></br>
                        <p>十元惠生活</p>
                        <img src={ require("./../asset/img/activity2.jpg") } className="img1"/>
                    </Flex.Item>
                    <Flex.Item>
                        <p>工作简餐</p>
                        <br></br>
                        <p>实惠方便选择多</p>
                        <img src={ require("./../asset/img/activity3.png") } className="img1"/>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
                <Container title="猜你喜欢" >
                    {
                        this.state.product.map((elem,index)=>{
                            return <Link to={"/detail/"+elem.product_id} key={elem.product_id}>
                                <Product elem={elem}></Product>
                            </Link>
                        })
                    }

                </Container>

            </div>
        )
    }
}

export default Home