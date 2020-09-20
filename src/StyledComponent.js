import styled from "styled-components";

const CardBtn = styled.span`
  background-color:${props => props.Style ?  "#ef394e" : "#fff"}
  color: ${props => props.Style ?  "#fff" : "#2bb4de"}
  padding: 10px 14px;
  text-align: center;
  min-height: 45px;
  font-size: 1rem;
  font-weight:bold;
  line-height: 1.222;
  border-radius: 8px;
  margin: 0px 10px 20px;
  float: right;
`  
const BascketForm = styled.div`
 display:${props => props.onShow ?  "block" : "none"};
 ${props => props.onShow ?console.log("block") :""}
 position:relative;
 width:230px !important;
 height:fit-content !important;
 background-color: #fff;
 z-index:20;
`
const ShowNumber = styled.div`
display: ${props =>props.display === 0 ? "none" : "block"};
`
export {CardBtn,BascketForm,ShowNumber}
