// src/views/main.js

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Web3 from 'web3';
import { Row, Col } from 'antd';
import Media from 'react-media';

class MainView extends Component {
    renderMobile() {
        return <Row>
            <Col md={24} style={{ color: "white" }}>
                <pre>{JSON.stringify(this.props.openGames[0], null, 2)}</pre>
            </Col>
        </Row>
    }

    renderDesktop() {
        return <Row>
            <Col md={12} style={{ color: "white" }}>
                <pre>Column 1</pre>
                <pre>{JSON.stringify(this.props.openGames[0], null, 2)}</pre>
            </Col>
            <Col md={12} style={{ color: "white" }}>
                <pre>Column 2</pre>
            </Col>
        </Row>
    }

    render() {
        return <div id="main">
            <Media query="(max-width: 767px)">
                {
                    matches => matches ? this.renderMobile() : this.renderDesktop()
                }
            </Media>
        </div>
    }
}

export default connect(({ openGames }) => ({ openGames }))(MainView)