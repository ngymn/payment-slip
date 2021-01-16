import React, { useState } from 'react';
import './App.css';
import { PaymentSlip } from './PaymentSlip';


export const App: React.FC = () => {

  const initItem = { name: "", remark: "", amount: 0 }

  const [no, setNo] = useState("");
  const [date, setDate] = useState({ y: "", m: "", d: "" })
  const [code, setCode] = useState("");
  const [payee, setPayee] = useState("");
  const [items, setItems] = useState([initItem, initItem, initItem, initItem])

  const replaceItem = function <T>(item: T, items: T[], index: number) {
    const _ = items.splice(index, 1, item)
    return [...items];
  }

  const inputArea =
    <React.Fragment>
      <div id="input-area">
        
        <dl>
          <dt><span>入力エリア</span></dt>
          <dd><span>必要な情報をココに入力すると下部の出金伝票に値が反映されます。</span></dd>
          <dd><span>入力後はブラウザの印刷機能で出金伝票を保存してください。</span></dd>
        </dl>

        <div>
          <span>No.</span><input onChange={(e) => { setNo(e.target.value) }} />
        </div>
        <div>
          <span>年</span><input onChange={(e) => { setDate({ ...date, y: e.target.value }) }} />
          <span>月</span><input onChange={(e) => { setDate({ ...date, m: e.target.value }) }} />
          <span>日</span><input onChange={(e) => { setDate({ ...date, d: e.target.value }) }} />
        </div>
        <div>
          <span>コード</span><input onChange={(e) => { setCode(e.target.value) }} />
        </div>
        <div>
          <span>支払先</span><input onChange={(e) => { setPayee(e.target.value) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], name: e.target.value }, items, 0)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], remark: e.target.value }, items, 0)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], amount: Number(e.target.value) }, items, 0)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], name: e.target.value }, items, 1)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], remark: e.target.value }, items, 1)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], amount: Number(e.target.value) }, items, 1)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], name: e.target.value }, items, 2)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], remark: e.target.value }, items, 2)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], amount: Number(e.target.value) }, items, 2)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], name: e.target.value }, items, 3)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], remark: e.target.value }, items, 3)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], amount: Number(e.target.value) }, items, 3)) }} />
        </div>
      </div>
    </React.Fragment>

  return (
    <React.Fragment>
      {inputArea}
      <PaymentSlip no={no} date={date} code={code} payee={payee} items={items} />
    </React.Fragment>
  );
}

export default App;
