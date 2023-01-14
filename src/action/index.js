import { USERDETAILS, QUOTATIONS } from "./types";
import { getFormBody } from '../helper/utils';
import { getApis } from '../helper/apis';

export function createUser({name, email, password, confirmPassword}){
        const url = getApis.createUser();
        fetch(url,{
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }, 
            body: getFormBody({name, email, password, confirmPassword}),
        })
        .then(async (response) => {
            const data = await response.json();
            console.log('data', data);
        })
}

export function signIn({email, password}) {
    const url = getApis.signIn();
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: getFormBody({email, password}),
    })
    .then(async (response) => {
        const data = await response.json();
        console.log('data', data);
        localStorage.setItem('token', data.data.token);
    })
}

export function createQuotations(){

}

export function userDetails(){

}

export function quotations(){
    
}