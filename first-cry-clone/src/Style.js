import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-synthesis: none;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    color: #333;
    font: 400 13px/18px 'Poppins', sans-serif;
  }

  ul, li {
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  input[type="text"] {
    font-family: 'Poppins', sans-serif;
  }

  input, input:focus, textarea, textarea:focus {
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }

  .number {
    font-family: 'Lato', sans-serif;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-start {
    align-items: flex-start;
  }

  .flex-end {
    align-items: flex-end;
  }

  .flex-col {
    flex: 1;
    min-height: 1px;
  }

  .flex-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .justify-end {
    justify-content: end;
  }

  .align-self-center {
    align-self: center;
  }
  .gap4{
    gap: 4px;
  }
  .gap5{
    gap: 5px;
  }
  .gap6 {
    gap: 6px;
  }
  .gap10 {
    gap: 10px;
  }
  .gap12 {
    gap: 12px;
  }
  .gap13 {
    gap: 13px;
  }
  .gap14 {
    gap: 14px;
  }
  .gap15 {
    gap: 15px;
  }
  .gap16 {
    gap: 16px;
  }
  .gap18 {
    gap: 18px;
  }
  .gap24 {
    gap: 24px;
  }

  .gap28 {
    gap: 28px;
  }

  .gap36 {
    gap: 36px;
  }
  .gap165 {
    gap: 165px;
  }
  .mt4 {
    margin-top: 4px;
  }

  .mt8 {
    margin-top: 8px;
  }

  .mt10 {
    margin-top: 10px;
  }

  .mt12 {
    margin-top: 12px;
  }

  .mt16 {
    margin-top: 16px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .mt24 {
    margin-top: 24px;
  }

  .mt28 {
    margin-top: 28px;
  }

  .mt30 {
    margin-top: 30px;
  }

  .mt32 {
    margin-top: 32px;
  }

  .mt36 {
    margin-top: 36px;
  }
  .mt50 {
    margin-top: 50px;
  }

  .mt78 {
    margin-top: 78px;
  }

  .mb4 {
    margin-bottom: 4px;
  }
  .mb8 {
    margin-bottom: 8px;
  }

  .mb10 {
    margin-bottom: 10px;
  }

  .mb14 {
    margin-bottom: 14px;
  }

  .mb20{
    margin-bottom: 20px;
  }

  .mb24 {
    margin-bottom: 24px;
  }

  .mb28 {
    margin-bottom: 28px;
  }

  .mb32 {
    margin-bottom: 32px;
  }

  .mb36{
    margin-bottom: 36px;
  }
  .mb42{
    margin-bottom: 36px;
  }
  .mb70{
    margin-bottom: 70px;
  }

  .mr4{
    margin-right: 4px;
  }
  .mr6{
    margin-right: 6px;
  }
  .mr8 {
    margin-right: 8px;
  }

  .mr12 {
    margin-right: 12px;
  }

  .mr20{
    margin-right: 20px;
  }

  .mr30 {
    margin-right: 30px;
  }

  .mr40{
    margin-right: 40px;
  }
  .mr80{
    margin-right: 80px;
  }

  .ml8 {
    margin-left: 8px;
  }
  .ml12 {
    margin-left: 8px;
  }
  .ml22 {
    margin-left: 22px;
  }
  .ml120 {
    margin-left: 120px;
  }
  .pl16{
    padding-left: 16px;
  }
  .pr16{
    padding-right: 16px;
  }
  .pr6{
    padding-right: 6px;
  }
  .pad{
    padding:15px 5px 15px 5px;
  }
  .pointer {
    cursor: pointer;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .caps {
    text-transform: capitalize;
  }

  .full-width {
    width: 100% !important;
  }

  .align-top {
    vertical-align: top;
  }

  .pos-rel {
    position: relative;
  }

  .inline-message {
    // padding: 6px 14px;
    // align-items: center;
    border-radius: 4px;
    width: 100%;
    &.error {
      color: red;
    }
    &.success {
      color:green;
      font-weight:700;
      font-size:16px;
    }
    .icon {
      margin-right: 10px;
      max-width: 16px;
    }
  }
  .form-item .react-datepicker__day-name, 
  .form-item .react-datepicker__day, 
  .form-item .react-datepicker__time-name {
    width: 32px ;
    height: 32px;
  }
  .react-datepicker__triangle {
    transform: none !important;
    left: 50px !important;
    z-index: 1;
  }
  .table-loader-wrapper {
    height: 65px;
  }
  .animatedBackground {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #fff;
    background-image: linear-gradient(to right, #fff 0%, #edeef1 20%, #fff 40%, #fff 100%);
    background-size: 1000px 104px;
    position: relative;
}
@keyframes placeHolderShimmer {
    0% {
        background-position: -468px 0
    }
    100% {
        background-position: 468px 0
    }
}
  @media print {
    .sidebar, .header, .hide-in-print-media {
      display: none;
    }
  }
  `;

export default GlobalStyle;
