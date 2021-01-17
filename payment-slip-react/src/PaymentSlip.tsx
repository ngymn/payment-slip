
import React from "react";
import './App.css';

interface PaymentItemProps {
    name?: string
    remark?: string
    amount?: string
}
interface DateProps {
    y?: string
    m?: string
    d?: string
}
interface PaymentSlipProps {
    no?: string
    date?: DateProps
    code?: string
    payee?: string
    items?: PaymentItemProps[]
}

export const PaymentSlip: React.FC<PaymentSlipProps> = ({ no, date, code, payee, items }) => {

    const totalAmount = () => {
        const sum = items?.reduce((p, c) => p + toInt(c.amount), 0).toString() || 0
        return sum > 0 ? sum.toString() : ""
    }

    return <React.Fragment>
        <div className="payment-slip">
            <div className="container">

                <div className="head">
                    <div className="head-left">
                        <div>
                            <span className="title">出金伝票</span>
                            <No no={no}></No>
                        </div>

                        <div className="date">
                            <Date {...date} />
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
                    <Code code={code} />
                    <Payee payee={payee} />
                </div>

                <div className="table">
                    <table className="table">
                        <thead >
                            <tr className="th">
                                <th><span>勘定科目</span></th>
                                <th><span>摘要</span></th>
                                <th><span>金額</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items?.map((item, i) => <Item key={`item-${i}`} {...item} />)}
                            <tr className="summary">
                                <td colSpan={2}><span>合計</span></td>
                                <td><span>{doFormatAmount(totalAmount())}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </React.Fragment>
};

// ----- Component ----- //

interface ApprovingBoxProps {
    title?: string
}
const ApprovingBox: React.FC<ApprovingBoxProps> = ({ title }) =>
    <React.Fragment>
        <div className="approving-box-outer">
            <div className="approving-box-title"><span>{title}</span></div>
        </div>
    </React.Fragment>

const Date: React.FC<DateProps> = ({ y, m, d }) =>
    <React.Fragment>
        <span>{y}</span><span>年</span>
        <span>{m}</span><span>月</span>
        <span>{d}</span><span>日</span>
    </React.Fragment>

const No: React.FC<{ no?: string }> = ({ no }) =>
    <React.Fragment>
        <span>No.</span><span>{no}</span>
    </React.Fragment>

const Code: React.FC<{ code?: string }> = ({ code }) =>
    <React.Fragment>
        <div className="tategaki centering"><span>コード</span></div>
        <div className="code centering"><span>{code}</span></div>
    </React.Fragment>

const Payee: React.FC<{ payee?: string }> = ({ payee }) =>
    <React.Fragment>
        <div className="tategaki centering">
            <span>支払先</span>
        </div>
        <div className="payee">
            <div className="payee-inner centering"><span>{payee}</span></div>
            <div className="sama centering"><span>様</span></div>
        </div>
    </React.Fragment>

const Item: React.FC<PaymentItemProps> = React.memo(
    ({ name, remark, amount }) =>
        <React.Fragment>
            <tr className="td">
                <td><span>{name}</span></td>
                <td><span>{remark}</span></td>
                <td><span>{doFormatAmount(amount)}</span></td>
            </tr>
        </React.Fragment>
)

// ----- Utils ----- //

const toInt = (s?: string) => {
    const n = Number(s)
    return Number.isInteger(n) && n > 0 ? n : 0
}

const doFormatAmount = (s?: string) => {
    const n = Number(s)
    return Number.isInteger(n) && n > 0 ? doFormatCurrency(n) : s
}

const doFormatCurrency = (amount: number) => `¥${amount.toLocaleString()} -`
