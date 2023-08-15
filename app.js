document.addEventListener('DOMContentLoaded', () => {
    const incomeForm = document.getElementById('income-form');
    const incomeList = document.getElementById('income-list');
    const expensesForm = document.getElementById('expense-form');
    const expensesList = document.getElementById('expense-list');
    const totalIncome = document.getElementById('total-income');
    const totalExpenses = document.getElementById('total-expenses');
    const remainingBudget = document.getElementById('remaining-budget');

    let incomes = [];
    let expenses = [];

    function updateBudget() {
        const totalIncomeAmount = incomes.reduce((sum, income) => sum + income.amount, 0);
        const totalExpensesAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        const remainingBudgetAmount = totalIncomeAmount - totalExpensesAmount;

        totalIncome.textContent = `Total Income: $${totalIncomeAmount}`;
        totalExpenses.textContent = `Total Expenses: $${totalExpensesAmount}`;
        remainingBudget.textContent = `Remaining Budget: $${remainingBudgetAmount}`;
    }

    function renderList(list, listElement) {
        listElement.innerHTML = '';
        list.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.description}: $${item.amount}`;
            listElement.appendChild(listItem);
        });
    }

    incomeForm.addEventListener('submit', event => {
        event.preventDefault();
        const incomeDescription = document.getElementById('income-description').value;
        const incomeAmount = parseFloat(document.getElementById('income-amount').value);

        if (incomeDescription && incomeAmount) {
            incomes.push({ description: incomeDescription, amount: incomeAmount });
            renderList(incomes, incomeList);
            updateBudget();
            incomeForm.reset();
        }
    });

    expensesForm.addEventListener('submit', event => {
        event.preventDefault();
        const expenseDescription = document.getElementById('expense-description').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        if (expenseDescription && expenseAmount) {
            expenses.push({ description: expenseDescription, amount: expenseAmount });
            renderList(expenses, expensesList);
            updateBudget();
            expensesForm.reset();
        }
    });
});
