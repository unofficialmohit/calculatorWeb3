import Web3 from 'web3';
let contractAddress="0x66d8dD299aCAef930a2c50824373844a0Ae8E71a";
let contractABI=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "first",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			}
		],
		"name": "difference",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "first",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			}
		],
		"name": "divide",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "first",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			}
		],
		"name": "multiply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "first",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "second",
				"type": "uint256"
			}
		],
		"name": "sum",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let contract;
let web3js;
let account;

let connectButton=document.getElementById('connect-btn');
let accountName=document.getElementById('accountName');
let connectContract=document.getElementById('connect-ctr');
let sum=document.getElementById('sum');
let difference=document.getElementById('difference');
let multiply=document.getElementById('multiply');
let divide=document.getElementById('divide');
let firstNumber=document.getElementById('firstnumber');
let secondNumber=document.getElementById('secondnumber');


function requestAccount(){
    ethereum.request({method:'eth_requestAccounts'})
    .then((accounts)=>{
        account=accounts[0];
        accountName.innerHTML=account;

    });
}

async function connectToContract(){
    web3js=new Web3(window.ethereum);
    contract=new web3js.eth.Contract(contractABI,contractAddress);
    console.log('Contract instance created successfully');
    console.log(contract.options.address);
    return contract;
}


connectButton.addEventListener('click',()=>{
    requestAccount();
    connectButton.innerText="Connected";
    connectButton.disabled=true;
    connectButton.style.backgroundColor='#664caf';
    connectContract.style.display = 'block';
});


connectContract.addEventListener('click',()=>{
connectToContract();  
connectContract.innerText="Connected to Contract";
sum.style.display='block';
difference.style.display='block';
multiply.style.display='block';
divide.style.display='block';
firstNumber.style.display='block';
secondNumber.style.display='block';

connectContract.disabled=true;
connectContract.style.backgroundColor='#664caf';

});
sum.addEventListener('click',async()=>{
if(firstNumber.value.length==0||secondNumber.value.length==0||parseInt(firstNumber.value)<0||parseInt(secondNumber.value)<0) 
{window.alert('INVALID NUMBER ENTERED')
return;}
let result=await contract.methods.sum(parseInt(firstNumber.value),parseInt(secondNumber.value))
.call();

window.alert("Result = "+result);
});
difference.addEventListener('click',async()=>{
    if(firstNumber.value.length==0||secondNumber.value.length==0||parseInt(firstNumber.value)<0||parseInt(secondNumber.value)<0) 
{window.alert('INVALID NUMBER ENTERED')
return;}
    let result=await contract.methods.difference(parseInt(firstNumber.value),parseInt(secondNumber.value))
.call();

window.alert("Result = "+result);
});
multiply.addEventListener('click',async()=>{
    if(firstNumber.value.length==0||secondNumber.value.length==0||parseInt(firstNumber.value)<0||parseInt(secondNumber.value)<0) 
{window.alert('INVALID NUMBER ENTERED')
return;}
    let result=await contract.methods.multiply(parseInt(firstNumber.value),parseInt(secondNumber.value))
.call();

window.alert("Result = "+result);
});
divide.addEventListener('click',async()=>{
if(firstNumber.value.length==0||secondNumber.value.length==0||parseInt(firstNumber.value)<0||parseInt(secondNumber.value)<0) 
{
    window.alert('INVALID NUMBER ENTERED');
    return;
}
    let result=await contract.methods.divide(parseInt(firstNumber.value),parseInt(secondNumber.value))
.call();

window.alert("Result = "+result);
});
// let tokenName=await contract.methods.testing()    // .call({from:account})
// .call({from:account})
// .then((tokenName=>{

//     window.alert(tokenName);
// }));

ethereum.on('accountsChanged',(accounts)=>{
    account=accounts[0];
    accountName.innerHTML=account;
})