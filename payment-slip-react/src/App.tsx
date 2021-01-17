import React, { useState } from 'react';
import './App.css';
import { PaymentSlip } from './PaymentSlip';


export const App: React.FC = () => {

  const now = new Date()

  const initDate = { y: now.getFullYear().toString(), m: (now.getMonth() + 1).toString(), d: now.getDate().toString() }
  const initApprover = ["係印", "", "", "承認印"]
  const initItem = { name: "", remark: "", amount: "" }
  
  const [no, setNo] = useState("");
  const [date, setDate] = useState(initDate);
  const [approver, setApprover] = useState(initApprover);
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
          <dd><span>※ただし、入力文字数が多くなると型崩れします。</span></dd>
        </dl>

        <div>
          <span>No.</span><input onChange={(e) => { setNo(e.target.value) }} />
        </div>
        <div>
          <span>年</span><input onChange={(e) => { setDate({ ...date, y: e.target.value }) }} value={date.y} />
          <span>月</span><input onChange={(e) => { setDate({ ...date, m: e.target.value }) }} value={date.m} />
          <span>日</span><input onChange={(e) => { setDate({ ...date, d: e.target.value }) }} value={date.d} />
        </div>
        <div>
          <span>コード</span><input onChange={(e) => { setCode(e.target.value) }} />
        </div>
        <div>
          <span>支払先</span><input onChange={(e) => { setPayee(e.target.value) }} />
        </div>
        <div>
          <span>承認欄</span>
          <input onChange={(e) => { setApprover(replaceItem(e.target.value, approver, 3)) }} value={approver[3]} />
          <input onChange={(e) => { setApprover(replaceItem(e.target.value, approver, 2)) }} value={approver[2]} />
          <input onChange={(e) => { setApprover(replaceItem(e.target.value, approver, 1)) }} value={approver[1]} />
          <input onChange={(e) => { setApprover(replaceItem(e.target.value, approver, 0)) }} value={approver[0]} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], name: e.target.value }, items, 0)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], remark: e.target.value }, items, 0)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[0], amount: e.target.value }, items, 0)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], name: e.target.value }, items, 1)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], remark: e.target.value }, items, 1)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[1], amount: e.target.value }, items, 1)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], name: e.target.value }, items, 2)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], remark: e.target.value }, items, 2)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[2], amount: e.target.value }, items, 2)) }} />
        </div>
        <div>
          <span>勘定科目</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], name: e.target.value }, items, 3)) }} />
          <span>摘要</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], remark: e.target.value }, items, 3)) }} />
          <span>金額</span><input onChange={(e) => { setItems(replaceItem({ ...items[3], amount: e.target.value }, items, 3)) }} />
        </div>
      </div>
    </React.Fragment>

  return (
    <React.Fragment>
      {inputArea}
      <PaymentSlip no={no} date={date} approver={approver} code={code} payee={payee} items={items} />
    </React.Fragment>
  );
}

export default App;
