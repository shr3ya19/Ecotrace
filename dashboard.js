fetch("data.json")
.then(res=>res.json())
.then(data=>{

let names=[]
let waste=[]
let types={}

let totalWaste=0
let highRisk=0

data.forEach(f=>{

names.push(f.name)
waste.push(f.waste)

totalWaste+=f.waste

if(f.risk==="High") highRisk++

if(types[f.type]) types[f.type]++
else types[f.type]=1

})

document.getElementById("factoryCount").innerText=data.length
document.getElementById("totalWaste").innerText=totalWaste
document.getElementById("highRisk").innerText=highRisk


/* BAR CHART */

new Chart(document.getElementById("barChart"),{

type:"bar",

data:{
labels:names,
datasets:[{
data:waste,
backgroundColor:[
"#ef4444",
"#ef4444",
"#f59e0b",
"#f59e0b",
"#f59e0b"
]
}]
},

options:{
plugins:{legend:{display:false}}
}

})


/* PIE CHART */

new Chart(document.getElementById("pieChart"),{

type:"pie",

data:{
labels:Object.keys(types),
datasets:[{
data:Object.values(types),
backgroundColor:[
"#ef4444",
"#3b82f6",
"#10b981",
"#f59e0b",
"#8b5cf6",
"#6b7280"
]
}]
}

})

})