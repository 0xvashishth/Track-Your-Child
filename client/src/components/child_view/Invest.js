import "../../stylesheets/child/invest.css";
import {
    Coin,
    Stock
} from "../svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faGoogle, faAmazon, faFacebook } from '@fortawesome/free-brands-svg-icons'
import GOOGLchart from "../../functions/GOOGLchart";
import { Link } from 'react-router-dom'


import netflix from "../../assets/netflix.svg";
import nike from "../../assets/nike.svg";
import cocacola from "../../assets/cocacola.svg";
import disney from "../../assets/disney.svg";
import mcdonalds from "../../assets/mcdonalds.svg";
import tesla from "../../assets/tesla.svg";
import gamestop from "../../assets/gamestop.svg";

import Quotes from "../../functions/quotes";
import NetReturn from "../../functions/netReturn";

import apis from '../../api'

const { Component } = require("react");

class Invest extends Component {
    constructor() {
        super();
        this.state = {
            stocks: [],
            current_stock: {},
            current_shares: 0
        }
    }

    componentDidMount = async () => {
        const getStocks = await apis.getStocks()
        this.setState({stocks: getStocks.data.data, current_stock: getStocks.data.data[0]})
        
        const getShares = await apis.getShares("61f621d3bf24162200bfb993", "GOOGL")  
        this.setState({current_shares: getShares.data.data.shares})
        console.log(this.state.current_shares)
    }

    render() {
        const stocks = this.state.stocks
        const current_stock = this.state.current_stock
        const current_shares = this.state.current_shares
        const stocks_render = [];

        for (let i = 0; i < stocks.length; ++i) {
            let icon_render = <FontAwesomeIcon icon={faApple} />
            if (stocks[i].name === "Apple") {
                icon_render = <FontAwesomeIcon icon={faApple} />
            }
            else if (stocks[i].name === "Google") {
                icon_render = <FontAwesomeIcon icon={faGoogle} />
            }
            else if (stocks[i].name === "Amazon") {
                icon_render = <FontAwesomeIcon icon={faAmazon} />
            }
            else if (stocks[i].name === "Facebook") {
                icon_render = <FontAwesomeIcon icon={faFacebook} />
            }
            else if (stocks[i].name === "GameStop") {
                icon_render = <img  src={gamestop} alt="logo"/>
            }
            else if (stocks[i].name === "Tesla") {
                icon_render = <img src={tesla} alt="logo"/>
            }
            else if (stocks[i].name === "Coca-Cola") {
                icon_render = <img  src={cocacola} alt="logo"/>
            }
            else if (stocks[i].name === "McDonald's") {
                icon_render = <img src={mcdonalds} alt="logo"/>
            }
            else if (stocks[i].name === "Nike") {
                icon_render = <img src={nike} alt="logo"/>
            }
            else if (stocks[i].name === "Disney") {
                icon_render = <img src={disney} alt="logo"/>
            }
            else if (stocks[i].name === "Netflix") {
                icon_render = <img  src={netflix} alt="logo"/>
            }
            stocks_render.push(
                <li key={i}>{icon_render}<h4>{stocks[i].name}</h4><h4 className={(NetReturn(stocks[i].ticker) < 0) ? "negative" : "positive"}>{(NetReturn(stocks[i].ticker) > 0) ? "+" : ""}{Math.round(NetReturn(stocks[i].ticker) * 100) / 100}</h4></li>
            );
        }

        return (
            <div className="main-container">
                <Link to='/'><h4 className="title">TrackYourChild</h4></Link>
                <div className="stat">
                    <img alt="img" src={Coin} />
                    <h4>500</h4>
                    <img alt="img" src={Stock} />
                    <h4>+50</h4>
                </div>
                <h3 style={{ color: "var(--main2)" }}>Invest Coins</h3>
                <div className="invest-sub-container">
                    <div className="companies">
                        <h4>Companies</h4>
                        <ul>
                            {stocks_render}
                        </ul>
                    </div>
                    <div className="company-info">
                        <h4>{current_stock.name}</h4>
                        <div className="graph">
                        <GOOGLchart />
                        </div>
                        <div className="company-bio">
                            <h4>Current Share Price: {Quotes(current_stock.ticker)}</h4>
                            <h4>Shares Owned: {current_shares}</h4>
                            <h4>Coins Invested: {Math.round(current_shares * Quotes(current_stock.ticker) * 100) / 100}</h4>
                        </div>
                        <div className="invest-buttons">
                            <button id="buy"><h4>Buy</h4></button>
                            <button id="sell"><h4>Sell</h4></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Invest;
