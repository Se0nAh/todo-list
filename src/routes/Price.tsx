import {PriceData} from "../types";
import styled from "styled-components";

function Price({tickersData}: {tickersData?: PriceData}) {
  if (!tickersData) return <></>

  return (
  <PriceContainer>
    <Item>
      <div>
        최고가 ({new Date(tickersData?.quotes?.USD?.ath_date).toLocaleString()})
      </div>

      <Value>
        ${tickersData?.quotes?.USD?.ath_price.toFixed(2)}
      </Value>
    </Item>
    <Item>
      <div>
        15분 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_15m}%
      </Value>
    </Item>
    <Item>
      <div>
        30분 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_30m}%
      </Value>
    </Item>
    <Item>
      <div>
        1시간 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_1h}%
      </Value>
    </Item>
    <Item>
      <div>
        6시간 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_6h}%
      </Value>
    </Item>
    <Item>
      <div>
        12시간 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_12h}%
      </Value>
    </Item>
    <Item>
      <div>
        12시간 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_12h}%
      </Value>
    </Item>
    <Item>
      <div>
        24시간 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_24h}%
      </Value>
    </Item>
    <Item>
      <div>
        7일 전보다
      </div>
      <Value>
        {tickersData?.quotes?.USD?.percent_change_7d}%
      </Value>
    </Item>

  </PriceContainer>);
}

export default Price;

const PriceContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

const Bold = styled.div`
  font-weight: bold;
`

const Item = styled.li`
  border-top: 1px solid ${props => props.color};
  :last-child {
    border-bottom: 1px solid ${props => props.color};
  }
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items:  center;
`
const Value = styled.div`
  font-size: 22px;  
`