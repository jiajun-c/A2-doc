import React,{useState} from 'react';
import {sha256} from "js-sha256";
import "./validate.css"
const Validate = () => {
    const [times,setTimes]=useState(3)
    const click=()=>{
        const input = document.getElementById("input");
        const value = sha256(input.value)
        if(times!==0&&value==="4bc6c518181acd69740a01d39cafd5359146b038230ce1137e6f61eae9ae5a09"){
            document.getElementById("href").style.display='flex';
            document.getElementById("input").style.display="none";
            document.getElementById("btn").style.display="none";
        }
        else if (times!==0){
            setTimes(times-1)
            alert(`输入错误，你还有${times}次机会`)
        }
        else {
            alert("该按钮已锁死")
            document.getElementById("btn").style.display="none"
        }
    }
    return (
        <div>
            <input type={"password"} id={"input"}/>
            <button id={"btn"}  onClick={click}>请输入密钥</button>
        </div>
    );
};

export default Validate;