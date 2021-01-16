
import React from "react";
import './App.css';

interface PaymentSlipProps {

}

export const PaymentSlip: React.FC<PaymentSlipProps> = ({ children }) => (
    <React.Fragment>
        <div className="payment-slip">
            <div className="container">

                <div className="head">
                    <div className="head-left">
                        <div>
                            <span className="title">出金伝票</span>
                            <No number="100"></No>
                        </div>

                        <div className="date">
                            <Date y={2000} m={12} d={31} />
                        </div>
                    </div>
                    <div className="head-right">
                        <div className="approving-boxes">
                            <ApprovingBox title="係印" />
                            <ApprovingBox />
                            <ApprovingBox />
                            <ApprovingBox title="承認印" />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="middle-item-wrapper middle-item ">
                    <Code code="ABC123" />
                    <Payee payee="株式会社あいうえお" />
                </div>

                <div className="table">
                    <table className="table">
                        <thead className="th">
                            <th><span>勘定科目</span></th>
                            <th><span>摘要</span></th>
                            <th><span>金額</span></th>
                        </thead>
                        <Item name="旅費交通費" remark="東京-大阪" amount={1000000} />
                        <Item name="旅費交通費" remark="東京-大阪" amount={1000000} />
                        <Item name="旅費交通費" remark="東京-大阪" amount={1000000} />
                        <Item name="旅費交通費" remark="東京-大阪" amount={1000000} />
                        <tbody className="summary">
                            <td colSpan={2}><span>合計</span></td>
                            <td><span>{doFormatCurrency(1000000)}</span></td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </React.Fragment>

);

interface ApprovingBoxProps {
    title?: string
}

const ApprovingBox: React.FC<ApprovingBoxProps> = ({ title }) =>
    <React.Fragment>
        <div className="approving-box-outer">
            <div className="approving-box-title"><span>{title}</span></div>
        </div>
    </React.Fragment>


interface DateProps {
    y: number
    m: number
    d: number
}
const Date: React.FC<DateProps> = ({ y, m, d }) =>
    <React.Fragment>
        <span>{y}</span><span>年</span>
        <span>{m}</span><span>月</span>
        <span>{d}</span><span>日</span>
    </React.Fragment>


interface NoProps {
    number: string
}
const No: React.FC<NoProps> = ({ number }) =>
    <React.Fragment>
        <span>No.</span><span>{number}</span>
    </React.Fragment>


interface CodeProps {
    code?: string
}
const Code: React.FC<CodeProps> = ({ code }) =>
    <React.Fragment>
        <div className="tategaki centering"><span>コード</span></div>
        <div className="code centering"><span>{code}</span></div>
    </React.Fragment>

interface PayeeProps {
    payee: string
}
const Payee: React.FC<PayeeProps> = ({ payee }) =>
    <React.Fragment>
        <div className="tategaki centering">
            <span>支払先</span>
        </div>
        <div className="payee">
            <div className="payee-inner centering"><span>{payee}</span></div>
            <div className="sama centering"><span>様</span></div>
        </div>
    </React.Fragment>


interface ItemProps {
    name: string
    remark: string
    amount: number
}
const Item: React.FC<ItemProps> = ({ name, remark, amount }) =>
    <React.Fragment>
        <tbody className="td">
            <td><span>{name}</span></td>
            <td><span>{remark}</span></td>
            <td><span>{doFormatCurrency(amount)}</span></td>
        </tbody>
    </React.Fragment>

const doFormatCurrency = (amount: number) => `¥${amount.toLocaleString()}-`
