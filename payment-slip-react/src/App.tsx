import React from 'react';
import './App.css';
import { PaymentSlip } from './PaymentSlip';

function App() {

  const no = "100", code = "ABCDE", payee = "株式会社あいうえお"

  const date = { y: 2000, m: 1, d: 1 }

  const items = [{ name: "旅費交通費", remark: "東京-大阪", amount: 1000000 }, { name: "旅費交通費", remark: "東京-大阪", amount: 1000000 }, { name: "旅費交通費", remark: "東京-大阪", amount: 1000000 }, { name: "旅費交通費", remark: "東京-大阪", amount: 1000000 }]


  return (
    <React.Fragment><PaymentSlip no={no} date={date} code={code} payee={payee} items={items} /></React.Fragment>
  );
}

export default App;
