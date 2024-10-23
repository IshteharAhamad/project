const expenseForm=document.getElementById("expenseForm")
const Expenselist=document.getElementById("Expenselist")
expenseForm.addEventListener('submit',(e)=>{
    const description=document.getElementById("description")
    const amount=document.getElementById("amount")
    const category=document.getElementById("category")
    e.preventDefault()
    if (description.value && category.value && !isNaN(amount.value)) {
        const newRow=document.createElement('tr');
        newRow.innerHTML=`<td>${description.value}</td>
        <td>${category.value}</td>
        <td>${amount.value}</td>` 
        Expenselist.appendChild(newRow) 
        
        description.value=''
        category.value=''
        amount.value=''
    } 
    
    else {
        alert("All fiels are required!")
    }

})