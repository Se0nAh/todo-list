import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {fetchCoins} from "../api";
import {Helmet} from "react-helmet";


const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 40px auto;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CoinList = styled.ul`
`;
const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &:hover{
    a {
      color: ${props => props.theme.accentColor}
    }
  }
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  //margin: 20px 0;
`
const coins: ICoin[] = [{
  id: "btc-bitcoin",
  name: "Bitcoin",
  symbol: "BTC",
  rank: 1,
  is_new: false,
  is_active: true,
  type: "coin",
},
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },]

interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>
          코인
        </Title>
      </Header>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
      <CoinList>
        {data?.slice(0,100).map((coin) => {
          return (
            <Coin key={coin.id}>
              <Link to={{pathname:`/${coin.id}`, state: {name: coin.name}}}>
                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                {coin.name} &rarr;
              </Link>
            </Coin>
          )
        })}
      </CoinList>)}
    </Container>
  )
}

export default Coins;