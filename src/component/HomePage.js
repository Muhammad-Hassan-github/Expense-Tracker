import React, { useReducer, createContext, useContext, useState } from 'react';
import MyContext from './context'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';



export default function Home() {

    const [incomeValue, setInocmeValue] = useState("");
    const [incomeDesc, setInocmeDesc] = useState("");

    const [expenseValue, setExpenseValue] = useState("");
    const [expenseDesc, setExpenseDesc] = useState("");
    let textInput = null



    return (
        <MyContext.Consumer>
            {(props) => {
                console.log(props.state.history)
                return (

                    <div className="Main-Contariner">
                        <h1>Expense Tracker</h1>
                        <div className="Header">
                            <div className="Header-Container" >
                                <h2>Total Income</h2>
                                <h2>${props.state.income}</h2>
                            </div>
                            <div className="Header-Container" >
                                <h2>Total Expense</h2>
                                <h2>${props.state.expense}</h2>


                            </div>
                            <div className="Header-Container" >
                                <h2>Total Saving</h2>
                                <h2 >${props.state.saving}</h2>
                            </div>

                        </div>

                        <div className="content">
                            <div className="content-container" >
                                <h1>Add Income</h1>
                                <hr width="80%" />
                                <div className="form">
                                    <label>Amount</label><br />
                                    <input type="Number" id="incomeValueText" onChange={(e) => setInocmeValue(e.target.value)} /><br />
                                    <label>Description</label><br />
                                    <input type="text" id="incomeDescText" onChange={(e) => setInocmeDesc(e.target.value)} /><br />
                                    <button onClick={() => {



                                        if (incomeValue < 0) {
                                            swal("Oops!", "Plesae Enter Valid Value!", "error");
                                        }
                                        else if (incomeValue === "" || incomeDesc === "") {
                                            swal("Oops!", "All Fields are Required!", "error")
                                        }

                                        else {
                                            props.setInocme(parseInt(incomeValue) + (props.state.income))
                                            props.setSaveing((parseInt(incomeValue) + (props.state.income)) - props.state.expense)
                                            props.setHistory([{ desc: incomeDesc, amount: incomeValue, type: "income" }, ...props.state.history])
                                            swal("Success!", "Your Transaction is saved!", "success");
                                            document.getElementById("incomeValueText").value = "";
                                            document.getElementById("incomeDescText").value = "";
                                            setInocmeValue("")
                                            setInocmeDesc("")


                                        }
                                    }} >Save</button>
                                </div>
                            </div>
                            <div className="content-container" >
                                <h1>Add Expense</h1>
                                <hr width="80%" />
                                <div className="form">
                                    <label>Amount</label><br />
                                    <input type="Number" id="expenseValueText" ref={(input) => { textInput = input; }} onChange={(e) => setExpenseValue(e.target.value)
                                    } /><br />
                                    <label>Description</label><br />
                                    <input type="text" id="expenseDescText" onChange={(e) => setExpenseDesc(e.target.value)} /><br />
                                    <button onClick={() => {

                                        if (expenseValue < 0) {
                                            swal("Oops!", "Plesae Enter Valid Value!", "error");
                                        }

                                        else if (expenseValue === "" || expenseDesc === "") { swal("Oops!", "All Fields are Required!", "error") }

                                        else {

                                            props.setExpense(parseInt(expenseValue) + (props.state.expense))
                                            props.setSaveing(props.state.income - (parseInt(expenseValue) + (props.state.expense)))
                                            props.setHistory([{ desc: expenseDesc, amount: expenseValue, type: "expense" }, ...props.state.history])
                                            swal("Success!", "Your Transaction is saved!", "success");
                                            document.getElementById("expenseValueText").value = "";
                                            document.getElementById("expenseDescText").value = "";
                                            setExpenseValue("")
                                            setExpenseDesc("")
                                        }

                                    }} >Save</button>
                                </div>
                            </div>
                            <div className="content-container" >
                                <h1>History</h1>
                                <hr width="80%" />
                                <div className="history-contaier">

                                    {props.state.history.map((data, key) => {

                                        return (
                                            < div className="history-tab" >

                                                {

                                                    data.type == "income" ?
                                                        <>
                                                            <span style={{ color: "red" }}>{data.desc}</span>
                                                            <span style={{ color: "red" }} >${data.amount}</span>
                                                            <button className="History-del" onClick={() => {
                                                                swal({
                                                                    title: "Are you sure?",
                                                                    text: "Are you sure that you want to leave this Transaction?",
                                                                    icon: "warning",
                                                                    dangerMode: true,
                                                                })
                                                                    .then(willDelete => {
                                                                        if (willDelete) {
                                                                            let newarray = [...props.state.history]
                                                                            newarray.splice(key, 1)
                                                                            props.setHistory(
                                                                                newarray)
                                                                            swal("Deleted!", "Your Transaction has been deleted!", "success");
                                                                        }
                                                                    });
                                                            }} >x</button>
                                                        </>

                                                        :

                                                        <>
                                                            <span>{data.desc}</span>
                                                            <span>${data.amount}</span>
                                                            <button className="History-del" onClick={() => {
                                                                swal({
                                                                    title: "Are you sure?",
                                                                    text: "Are you sure that you want to leave this Transaction?",
                                                                    icon: "warning",
                                                                    dangerMode: true,
                                                                })
                                                                    .then(willDelete => {
                                                                        if (willDelete) {
                                                                            let newarray = [...props.state.history]
                                                                            newarray.splice(key, 1)
                                                                            props.setHistory(
                                                                                newarray)
                                                                            swal("Deleted!", "Your Transaction has been deleted!", "success");
                                                                        }
                                                                    });

                                                            }}>x</button>
                                                        </>

                                                }


                                            </div>

                                        )

                                    }
                                    )}




                                </div>


                            </div>
                        </div>

                    </div>



                )
            }}

        </MyContext.Consumer >
    )

}
