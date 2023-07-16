const expenseTypes = [
    'Home Rent',
    'Home Expenses',
    'School Tution Fees',
    'Home Tutor Fees',
    'School Bus Fee',
    'Electricity Bill',
    'Internet Bill',
    'Gas Bill',
    'Mobile Bill',
    'Other Utility Bill',
    'Grocery Expenses',
    'Regular Travel Expenses',
    'Miscellaneous Expenses',
    'Medicin Expenses',
    'Medical Expenses',
    'Doctor Expenses',
    'Entertainment Expenses',
    'Servent Fees',
    'Driver Fees',
    'Other Expenses',
].sort().reverse();

const expenseEmiTypes = [
    'Home Loan EMI',
    'Car Loan EMI',
    'Personal Loan EMI',
    'Product Purchase Loan EMI',
    'Other Loan EMI'
].sort().reverse();

const expenseSaving = [
    'Bank Recurring Deposit',
    'Other Invesment Deposit'
].sort().reverse();

const expensePredicted = [
    'Ceremony',
    'Occasion',
    'Festival',
    'Others'
].sort().reverse();

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const incomeFixeds = [
    'Monthly Salary (Job)',
    'Monthly Profit (Business)',
    'Monthly Earning (Others)',
];

const incomeCertain = [
    'Bonus',
    'Increment',
    'Extra Profit',
    'Others'
];

let isExpensesAdded = false;
let isIncomeAdded = false;
let isReportAdded = false; 

/** Onload expense table init  */
function expenseTabInit () {
    let expenseTabTbody = $('table#onexExpenseTab tbody#expenseTbody');
    
    //append tr to tbody
    for (var i = 0; i < 2; i++) {
        let setTr = `<tr class="expense-tr expense-tr${i}"></tr>`;
        expenseTabTbody.append(setTr);
    }

    //append tds to trs
    for (var i = 0; i < 2; i++) {
        let expenseTr = expenseTabTbody.find(`tr:eq(${i})`);
        let setTds = `
            <th scope="row" class="slno"></th>
            <td class="expense-type"></td>
            <td class="expense-title"></td>
            <td class="expense-amount num-td"></td>
            <td class="expense-action"></td>
        `;
        expenseTr.append(setTds);
    }

    //value set into tds
    for (var i = 0; i < 2; i++) {
        let expenseTr = expenseTabTbody.find(`tr:eq(${i})`);
        expenseTr.find("th:eq(0)").text(i + 1);
        expenseTr.find("td:eq(0)").text('.....');
        expenseTr.find("td:eq(1)").text('.....');
        expenseTr.find("td:eq(2)").text('.....');
        expenseTr.find("td:eq(3)").text('');
    }
}

/** Onload income table init */
function incomeTabInit () {
    let incomeTabTbody = $('table#onexIncomeTab tbody#incomeTbody');
    
    //append tr to tbody
    for (var i = 0; i < 2; i++) {
        let setTr = `<tr class="income-tr income-tr${i}"></tr>`;
        incomeTabTbody.append(setTr);
    }

    //append tds to trs
    for (var i = 0; i < 2; i++) {
        let incomeTr = incomeTabTbody.find(`tr:eq(${i})`);
        let setTds = `
            <th scope="row" class="slno"></th>
            <td class="income-type"></td>
            <td class="income-title"></td>
            <td class="income-amount num-td"></td>
            <td class="income-action"></td>
        `;
        incomeTr.append(setTds);
    }

    //value set into tds
    for (var i = 0; i < 2; i++) {
        let incomeTr = incomeTabTbody.find(`tr:eq(${i})`);
        incomeTr.find("th:eq(0)").text(i + 1);
        incomeTr.find("td:eq(0)").text('.....');
        incomeTr.find("td:eq(1)").text('.....');
        incomeTr.find("td:eq(2)").text('.....');
        incomeTr.find("td:eq(3)").text('');
    }
}

/** Create dropdown for fixed expenses */
function setGeneralExpenseDropdown() {
    let genSelectExpense = $('<select class="form-select expense-select2 action-dd gen-expense-dd"/>');
    if (expenseTypes.length) {
        genSelectExpense.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < expenseTypes.length; i++) {
            genSelectExpense.append(`<option value="${expenseTypes[i]}">${expenseTypes[i]}</option>`);
        }
    }
    return genSelectExpense;
}

/** Create dropdown for emi expenses */
function setEmiExpenseDropdown() {
    let emiSelectExpense = $('<select class="form-select expense-select2 action-dd emi-expense-dd"/>');
    if (expenseEmiTypes.length) {
        emiSelectExpense.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < expenseEmiTypes.length; i++) {
            emiSelectExpense.append(`<option value="${expenseEmiTypes[i]}">${expenseEmiTypes[i]}</option>`);
        }
    }
    return emiSelectExpense;
}

/** Create dropdown for diposit expenses */
function dipositExpenseDropdown() {
    let dipositSelectExpense = $('<select class="form-select expense-select2 action-dd diposit-expense-dd"/>');
    if (expenseSaving.length) {
        dipositSelectExpense.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < expenseSaving.length; i++) {
            dipositSelectExpense.append(`<option value="${expenseSaving[i]}">${expenseSaving[i]}</option>`);
        }
    }
    return dipositSelectExpense;
}

/** Create dropdown for predicted expenses */
function predictedExpenseDropdown() {
    let predictedSelectExpense = $('<select class="form-select expense-select2 action-dd predicted-expense-dd"/>');
    if (expensePredicted.length) {
        predictedSelectExpense.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < expensePredicted.length; i++) {
            predictedSelectExpense.append(`<option value="${expensePredicted[i]}">${expensePredicted[i]}</option>`);
        }
    }
    return predictedSelectExpense;
}

/** Create multi select dropdown for month specific expenses */
function setExpenseMonthsDropdown(uniqueClass = '') {
    let dmSelectExpense = $(`<select class="form-select action-dd expense-months-dd ${uniqueClass}" multiple="multiple"/>`);
    if (months.length) {
        dmSelectExpense.append(`<option value="">-Select-</option>`);
        dmSelectExpense.append(`<option value="All">Select All</option>`);
        for (var i = 0; i < months.length; i++) {
            dmSelectExpense.append(`<option value="${months[i]}">${months[i]}</option>`);
        }
    }
    return dmSelectExpense;
}

/** Create multi select dropdown for month specific incomes */
function setIncomeMonthsDropdown(uniqueClass = '') {
    let dmSelectIncome = $(`<select class="form-select action-dd income-months-dd ${uniqueClass}" multiple="multiple"/>`);
    if (months.length) {
        dmSelectIncome.append(`<option value="">-Select-</option>`);
        dmSelectIncome.append(`<option value="All">Select All</option>`);
        for (var i = 0; i < months.length; i++) {
            dmSelectIncome.append(`<option value="${months[i]}">${months[i]}</option>`);
        }
    }
    return dmSelectIncome;
}

/** Create dropdown for fixed incomes */
function setFixedIncomeDropdown() {
    let fixedIncomeDD = $('<select class="form-select income-select2 action-dd fixed-income-dd"/>');
    if (incomeFixeds.length) {
        fixedIncomeDD.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < incomeFixeds.length; i++) {
            fixedIncomeDD.append(`<option value="${incomeFixeds[i]}">${incomeFixeds[i]}</option>`);
        }
    }
    return fixedIncomeDD;
}

/** Create dropdown for certain incomes */
function setCertianIncomeDropdown() {
    let certianIncomeDD = $('<select class="form-select income-select2 action-dd certain-income-dd"/>');
    if (incomeCertain.length) {
        certianIncomeDD.append(`<option value="">-Select-</option>`);
        for (var i = 0; i < incomeCertain.length; i++) {
            certianIncomeDD.append(`<option value="${incomeCertain[i]}">${incomeCertain[i]}</option>`);
        }
    }
    return certianIncomeDD;
}

/** General Expenses | Fixed Expenses */
let generalExpensesTab = $('<table/>');
generalExpensesTab.addClass('table table-sm table-bordered table-striped my-3');
generalExpensesTab.attr('id', 'addExpenseTable');
let generalExpensesTbody = $('<tbody class="general-expenses-tody"/>');
generalExpensesTab.append(generalExpensesTbody);
generalExpensesTbody.append(`<tr><td class="gen-type dd-td"></td><td class="gen-title-td"></td><td class="gen-amount-td amt-td"></td><td class="gen-action-td rm-td"></td></tr>`);
generalExpensesTbody.find('tr:eq(0)').children('td:eq(0)').html(setGeneralExpenseDropdown());
generalExpensesTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="gen_expense_title[]" class="form-control gen-expense-title" placeholder="Expense Title..."/>`);
generalExpensesTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="gen_expense_amount[]" class="form-control gen-expense-amount" placeholder="Amount"/>`);
generalExpensesTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#generalExpenses').html(generalExpensesTab);

/** Expense | EMI */
let emiExpensesTab = $('<table/>');
emiExpensesTab.addClass('table table-sm table-bordered table-striped my-3');
emiExpensesTab.attr('id', 'addEmiExpenseTable');
let emiExpensesTbody = $('<tbody class="emi-expenses-tody"/>');
emiExpensesTab.append(emiExpensesTbody);
emiExpensesTbody.append(`<tr><td class="emi-type dd-td"></td><td class="emi-months-td"></td><td class="emi-amount-td amt-td"></td><td class="emi-action-td rm-td"></td></tr>`);
emiExpensesTbody.find('tr:eq(0)').children('td:eq(0)').html(setEmiExpenseDropdown());
emiExpensesTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="emi_expense_title[]" class="form-control mb-1 emi-expense-title-mm" placeholder="Expense Title..." />`);
emiExpensesTbody.find('tr:eq(0)').children('td:eq(1)').append(setExpenseMonthsDropdown('emi-expense-mmdd'));
emiExpensesTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="emi_expense_amount[]" class="form-control emi-expense-amount" placeholder="Amount"/>`);
emiExpensesTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#loanEmiExpenses').html(emiExpensesTab);

/** Expense | Diposits */
let dipositExpensesTab = $('<table/>');
dipositExpensesTab.addClass('table table-sm table-bordered table-striped my-3');
dipositExpensesTab.attr('id', 'addDipositExpenseTable');
let dipositExpensesTbody = $('<tbody class="diposit-expenses-tody"/>');
dipositExpensesTab.append(dipositExpensesTbody);
dipositExpensesTbody.append(`<tr><td class="diposit-type dd-td"></td><td class="diposit-months-td"></td><td class="diposit-amount-td amt-td"></td><td class="diposit-action-td rm-td"></td></tr>`);
dipositExpensesTbody.find('tr:eq(0)').children('td:eq(0)').html(dipositExpenseDropdown());
dipositExpensesTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="diposit_expense_title[]" class="form-control mb-1 diposit-expense-title-mm" placeholder="Expense Title..." />`);
dipositExpensesTbody.find('tr:eq(0)').children('td:eq(1)').append(setExpenseMonthsDropdown('diposit-expense-mmdd'));
dipositExpensesTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="diposit_expense_amount[]" class="form-control diposit-expense-amount" placeholder="Amount"/>`);
dipositExpensesTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#dipositExpenses').html(dipositExpensesTab);

/** Predicted Expense */
let predictedExpensesTab = $('<table/>');
predictedExpensesTab.addClass('table table-sm table-bordered table-striped my-3');
predictedExpensesTab.attr('id', 'addPredictedExpenseTable');
let predictedExpensesTbody = $('<tbody class="predicted-expenses-tody"/>');
predictedExpensesTab.append(predictedExpensesTbody);
predictedExpensesTbody.append(`<tr><td class="predicted-type dd-td"></td><td class="predicted-months-td"></td><td class="predicted-amount-td amt-td"></td><td class="predicted-action-td rm-td"></td></tr>`);
predictedExpensesTbody.find('tr:eq(0)').children('td:eq(0)').html(predictedExpenseDropdown());
predictedExpensesTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="predicted_expense_title[]" class="form-control mb-1 predicted-expense-title-mm" placeholder="Expense Title..." />`);
predictedExpensesTbody.find('tr:eq(0)').children('td:eq(1)').append(setExpenseMonthsDropdown('predicted-expense-mmdd'));
predictedExpensesTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="predicted_expense_amount[]" class="form-control predicted-expense-amount" placeholder="Amount"/>`);
predictedExpensesTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#predictedExpense').html(predictedExpensesTab);

/** Add more expense rows */
$('body').on('click', '.addmore-expense-row', function() {
    let activeTabHolderId = '';
    $('#expenseModal .tab-pane').each(function() {
        if ($(this).hasClass('active')) {
            activeTabHolderId = $(this).attr('id');
        }
    });
    if (activeTabHolderId == 'generalExpenses') {
        let cloneedTr = generalExpensesTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-expense-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        generalExpensesTbody.append(cloneedTr);
    }
    if (activeTabHolderId == 'loanEmiExpenses') {
        let cloneedTr = emiExpensesTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-expense-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        emiExpensesTbody.append(cloneedTr);
    }
    if (activeTabHolderId == 'dipositExpenses') {
        let cloneedTr = dipositExpensesTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-expense-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        dipositExpensesTbody.append(cloneedTr);
    }
    if (activeTabHolderId == 'predictedExpense') {
        let cloneedTr = predictedExpensesTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-expense-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        predictedExpensesTbody.append(cloneedTr);
    }
    $('.expense-modal-body').animate({ scrollTop: $('.expense-modal-body').prop('scrollHeight')}, 'fast');
    expenseSelect2Init();
});

$('body').on('click', '#nextOpenIncomeBtn', function() {
    if (isExpensesAdded) {
        $('#incomePanelBox').slideDown(300, function() {
            $('#nextOpenIncomeBtn').hide();
        });
    } else {
        displayAlert('error', 'Sorry!', 'Please first add your expense details');
    }
});

/** Add more row remove */
$('body').on('click', '.remove-expense-row', function() {
    $(this).parents('tr').remove();
});

$('body').on('click', '.remove-income-row', function() {
    $(this).parents('tr').remove();
});

/** Tab name display dynamically */
$('body').on('click', '.expense-nav-link-tab', function() {
    $('#expenseTitle').html($(this).find('.nav-link').text());
});

$('body').on('click', '.income-nav-link-tab', function() {
    $('#incomeTitle').html($(this).find('.nav-link').text());
});

/** Save changes section */
$('body').on('click', '#saveChangesExpenseBtn', function() {
    collectExpenseData();
    displayAllExpenses();
    $('#expenseModal').modal('hide');
    if (isReportAdded) {
        displayLoading();
        generateAllReports();
    }
});

$('body').on('click', '#saveChangesIncomeBtn', function() {
    collectIncomeData();
    displayAllIncomes();
    $('#incomeModal').modal('hide');

    if (isReportAdded) {
        displayLoading();
        generateAllReports();
    }
});

/** Edit section */
$('body').on('click', '.edit-expenses', function() {
    $('#' + $(this).data('tabid') + '-tab').tab('show');
    $('#expenseTitle').html($('#' + $(this).data('tabid') + '-tab').text());
    $('#expenseModal').modal('show');
});

$('body').on('click', '.edit-incomes', function() {
    $('#' + $(this).data('tabid') + '-tab').tab('show');
    $('#incomeTitle').html($('#' + $(this).data('tabid') + '-tab').text());
    $('#incomeModal').modal('show');
});

/** Display all expenses */
function displayAllExpenses() {
    let tbody = $('#onexExpenseTab').find('tbody'); 
    tbody.html('');
    tbody.append(getFixedExpenses());
    tbody.append(getEmiExpenses());
    tbody.append(getDipositExpenses());
    tbody.append(getPredictedExpenses());
    setTableSerialNo('onexExpenseTab');
    isExpensesAdded = true;
    $('#nextOpenIncomeBtn').removeClass('d-none');
}

/** Display all incomes */
function displayAllIncomes() {
    let tbody = $('#onexIncomeTab').find('tbody'); 
    tbody.html('');
    tbody.append(getFixedIncomes());
    tbody.append(getCertainIncomes());
    setTableSerialNo('onexIncomeTab');
    isIncomeAdded = true;
    $('#generateReportBtn').removeClass('d-none');
}

/** Fixed income row set */
function getFixedIncomes() {
    let totalFixedIncomeAmount = getTotalFixedIncome();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="income-type-td text-success">Fixed Incomes</td>
            <td class="income-title-td">Monthly Basis (12)</td>
            <td class="income-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalFixedIncomeAmount)}</strong></td>
            <td class="income-action-td">
                <a href="javascript:void(0);" class="edit-incomes" data-tabid="fixedIncome"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}

/** Certain income row set */
function getCertainIncomes() {
    let totalCertainIncomeAmount = getTotalCertainIncome();
    let monthsArr = certainMonths();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="income-type-td text-primary">Certain Incomes</td>
            <td class="income-title-td">
                Months Specific (${monthsArr.length})<br/>
                <span class="months-show">${monthsArr.join(', ')}</span>
            </td>
            <td class="income-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalCertainIncomeAmount)}</strong></td>
            <td class="income-action-td">
                <a href="javascript:void(0);" class="edit-incomes" data-tabid="certainIncome"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}

/** Fixed expense row set */
function getFixedExpenses() {
    let totalFixedExpenseAmount = getTotalFixedExpense();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="expense-type-td text-primary">Fixed Expenses</td>
            <td class="expense-title-td">Monthly Basis (12)</td>
            <td class="expense-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalFixedExpenseAmount)}</strong></td>
            <td class="expense-action-td">
                <a href="javascript:void(0);" class="edit-expenses" data-tabid="generalExpenses"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}

/** Emi expense row set */
function getEmiExpenses() {
    let totalEmiExpenseAmount = getTotalEmiExpense();
    let monthsArr = emiMonths();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="expense-type-td text-danger">Loan & EMI Expenses</td>
            <td class="expense-title-td">
                Months Specific (${monthsArr.length})<br/>
                <span class="months-show">${monthsArr.join(', ')}</span>
            </td>
            <td class="expense-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalEmiExpenseAmount)}</strong></td>
            <td class="expense-action-td">
                <a href="javascript:void(0);" class="edit-expenses" data-tabid="loanEmiExpenses"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}

/** Diposit expense row set */
function getDipositExpenses() {
    let totalDipositExpenseAmount = getTotalDipositExpense();
    let monthsArr = dipostMonths();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="expense-type-td text-success">Diposit Expenses</td>
            <td class="expense-title-td">
                Months Specific (${monthsArr.length})<br/>
                <span class="months-show">${monthsArr.join(', ')}</span>
            </td>
            <td class="expense-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalDipositExpenseAmount)}</strong></td>
            <td class="expense-action-td">
                <a href="javascript:void(0);" class="edit-expenses" data-tabid="dipositExpenses"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}

/** Predicted expense row set */
function getPredictedExpenses() {
    let totalPredictedExpenseAmount = getTotalPredictedExpense();
    let monthsArr = predictedMonths();
    let setTds = `
        <tr>
            <th scope="row" class="slno"></th>
            <td class="expense-type-td text-info">Special Expenses</td>
            <td class="expense-title-td">
                Months Specific (${monthsArr.length})<br/>
                <span class="months-show">${monthsArr.join(', ')}</span>
            </td>
            <td class="expense-amount-td"><strong><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(totalPredictedExpenseAmount)}</strong></td>
            <td class="expense-action-td">
                <a href="javascript:void(0);" class="edit-expenses" data-tabid="predictedExpense"><i class="fas fa-edit text-success"></i></a>
                <a href="javascript:void(0);" class="d-none"><i class="fas fa-trash-alt text-danger"></i></a>
            </td>
        </tr>
    `;
    return setTds; 
}


/** Fixed Income */
let fixedIncomeTab = $('<table/>');
fixedIncomeTab.addClass('table table-sm table-bordered table-striped my-3');
fixedIncomeTab.attr('id', 'addIncomeTable');
let fixedIncomeTbody = $('<tbody class="fixed-income-tody"/>');
fixedIncomeTab.append(fixedIncomeTbody);
fixedIncomeTbody.append(`<tr><td class="fixed-income-type-td dd-td"></td><td class="fixed-income-title-td"></td><td class="fixed-income-amount-td amt-td"></td><td class="fixed-income-action-td rm-td"></td></tr>`);
fixedIncomeTbody.find('tr:eq(0)').children('td:eq(0)').html(setFixedIncomeDropdown());
fixedIncomeTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="fixed_income_title[]" class="form-control fixed-income-title" placeholder="Income Title..."/>`);
fixedIncomeTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="fixed_income_amount[]" class="form-control fixed-income-amount" placeholder="Amount"/>`);
fixedIncomeTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#fixedIncome').html(fixedIncomeTab);

/** Certain Income */
let certainIncomeTab = $('<table/>');
certainIncomeTab.addClass('table table-sm table-bordered table-striped my-3');
certainIncomeTab.attr('id', 'addCertainIncomeTable');
let certainIncomeTbody = $('<tbody class="certain-income-tody"/>');
certainIncomeTab.append(certainIncomeTbody);
certainIncomeTbody.append(`<tr><td class="certain-income-type-td dd-td"></td><td class="certain-income-months-td"></td><td class="certain-income-amount-td amt-td"></td><td class="certain-income-action-td rm-td"></td></tr>`);
certainIncomeTbody.find('tr:eq(0)').children('td:eq(0)').html(setCertianIncomeDropdown());
certainIncomeTbody.find('tr:eq(0)').children('td:eq(1)').html(`<input type="text" name="certain_income_title[]" class="form-control mb-1 certain-income-title-mm" placeholder="Income Title..." />`);
certainIncomeTbody.find('tr:eq(0)').children('td:eq(1)').append(setIncomeMonthsDropdown('certain-income-mmdd'));
certainIncomeTbody.find('tr:eq(0)').children('td:eq(2)').html(`<input type="number" name="certain_income_amount[]" class="form-control certain-income-amount" placeholder="Amount"/>`);
certainIncomeTbody.find('tr:eq(0)').children('td:eq(3)').html('');
$('#certainIncome').html(certainIncomeTab);

/** Add more income rows */
$('body').on('click', '.addmore-income-row', function() {
    let activeTabHolderId = '';
    $('#incomeModal .tab-pane').each(function() {
        if ($(this).hasClass('active')) {
            activeTabHolderId = $(this).attr('id');
        }
    });
    if (activeTabHolderId == 'fixedIncome') {
        let cloneedTr = fixedIncomeTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-income-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        fixedIncomeTbody.append(cloneedTr);
    }
    if (activeTabHolderId == 'certainIncome') {
        let cloneedTr = certainIncomeTbody.find('tr:eq(0)').clone();
        cloneedTr.find('span.select2.select2-container').remove();
        cloneedTr.find('.form-control').val('');
        cloneedTr.find('td:last-child').html(`<a href="javascript:void(0);" class="remove-income-row"><i class="fas fa-trash-alt text-danger"></i></a>`);
        certainIncomeTbody.append(cloneedTr);
    }
    $('.income-modal-body').animate({ scrollTop: $('.income-modal-body').prop('scrollHeight')}, 'fast');
    incomeSelect2Init();
});

/** Add auto serial no to table  */
function setTableSerialNo(tabId) {
    let tbody = $('#' + tabId).find('tbody');
    tbody.find('tr').each(function(i, e) {
        $(this).find('.slno').html(i + 1);
    });
}

function pageLoadInit() {
    expenseTabInit();
    incomeTabInit();
}

/** Select2 init for expense */
function expenseSelect2Init() {
    $('.expense-select2').select2({
        width: '100%',
        dropdownParent: $('#expenseModal'),
        placeholder: 'Select an option',
        allowClear: false
    });
    $('.expense-months-dd').select2({
        width: '100%',
        dropdownParent: $('#expenseModal'),
        placeholder: 'Select months'
    });
}

/** Select2 init for income */
function incomeSelect2Init() {
    $('.income-select2').select2({
        width: '100%',
        dropdownParent: $('#incomeModal'),
        placeholder: 'Select an option',
        allowClear: false
    });
    $('.income-months-dd').select2({
        width: '100%',
        dropdownParent: $('#incomeModal'),
        placeholder: 'Select months'
    });
}

/** Select2 select all for expense */
$('body').on('select2:select', '.expense-months-dd', function(e) {
    if (e.params.data.text == 'Select All') {
        $(this).children('option').prop("selected", "selected");
        $(this).children('option:eq(0)').prop("selected", false);
        $(this).children('option:eq(1)').prop("selected", false);
        $(".expense-months-dd").trigger("change");
    }
});

/** Select2 select all for income */
$('body').on('select2:select', '.income-months-dd', function(e) {
    if (e.params.data.text == 'Select All') {
        $(this).children('option').prop("selected", "selected");
        $(this).children('option:eq(0)').prop("selected", false);
        $(this).children('option:eq(1)').prop("selected", false);
        $(".income-months-dd").trigger("change");
    }
});

/** Open expense modal */
$('body').on('click', '.open-expense-modal', function() {
    $('#expenseModal').modal('show');
});

/** Open income modal */
$('body').on('click', '.open-income-modal', function() {
    $('#incomeModal').modal('show');
});

/** Expense data in json */
const collectExpenseData = () => {
    let data = {};
    
    let fixedExpensesData = [];
    let emiExpensesData = [];
    let dipositExpensesData = [];
    let predictedExpensesData = [];

    $('.gen-expense-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = '';
            items['title'] = $('.gen-expense-title')[index].value;
            items['amount'] = ($('.gen-expense-amount')[index].value != '') ? $('.gen-expense-amount')[index].value : 0;
            fixedExpensesData.push(items);
        }
    });

    $('.emi-expense-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = $('.emi-expense-title-mm')[index].value;
            $('.emi-expense-mmdd').each(function(emiMonthIndex) {
                if (index == emiMonthIndex) {
                    items['title'] = $(this).val().join(', ');
                    items['months'] = 0;
                    if ($(this).val().length && typeof $(this).val() === 'object') {
                        items['months'] = $(this).val().length;
                    }
                }
            });
            $('.emi-expense-amount').each(function(emiAmountIndex) {
                if (index == emiAmountIndex) {
                    items['amount'] = ($(this).val() != '') ? $(this).val() : 0;
                }
            });
            emiExpensesData.push(items);
        }
    });

    $('.diposit-expense-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = $('.diposit-expense-title-mm')[index].value;
            $('.diposit-expense-mmdd').each(function(dipositMonthIndex) {
                if (index == dipositMonthIndex) {
                    items['title'] = $(this).val().join(', ');
                    items['months'] = 0;
                    if ($(this).val().length && typeof $(this).val() === 'object') {
                        items['months'] = $(this).val().length;
                    }
                }
            });
            $('.diposit-expense-amount').each(function(dipositAmountIndex) {
                if (index == dipositAmountIndex) {
                    items['amount'] = ($(this).val() != '') ? $(this).val() : 0;
                }
            });
            dipositExpensesData.push(items);
        }
    });

    $('.predicted-expense-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = $('.predicted-expense-title-mm')[index].value;
            $('.predicted-expense-mmdd').each(function(predictedMonthIndex) {
                if (index == predictedMonthIndex) {
                    items['title'] = $(this).val().join(', ');
                    items['months'] = 0;
                    if ($(this).val().length && typeof $(this).val() === 'object') {
                        items['months'] = $(this).val().length;
                    }
                }
            });
            $('.predicted-expense-amount').each(function(predictedAmountIndex) {
                if (index == predictedAmountIndex) {
                    items['amount'] = ($(this).val() != '') ? $(this).val() : 0;
                }
            });
            predictedExpensesData.push(items);
        }
    });

    data['fixed_expenses'] = fixedExpensesData;
    data['emi_expenses'] = emiExpensesData;
    data['diposit_expenses'] = dipositExpensesData;
    data['predicted_expenses'] = predictedExpensesData;
    return JSON.stringify(data);
}

/** Income data in json */
const collectIncomeData = () => {
    let data = {};
    
    let fixedIncomeData = [];
    let certainIncomeData = [];

    $('.fixed-income-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = '';
            items['title'] = $('.fixed-income-title')[index].value;
            items['amount'] = ($('.fixed-income-amount')[index].value != '') ? $('.fixed-income-amount')[index].value : 0;
            fixedIncomeData.push(items);
        }
    });

    $('.certain-income-dd').each(function(index) {
        let items = {};
        if ($(this).val() != '') {
            items['type'] = $(this).val();
            items['text'] = $('.certain-income-title-mm')[index].value;
            $('.certain-income-mmdd').each(function(certainMonthIndex) {
                if (index == certainMonthIndex) {
                    items['title'] = $(this).val().join(', ');
                    items['months'] = 0;
                    if ($(this).val().length && typeof $(this).val() === 'object') {
                        items['months'] = $(this).val().length;
                    }
                }
            });
            $('.certain-income-amount').each(function(certainAmountIndex) {
                if (index == certainAmountIndex) {
                    items['amount'] = ($(this).val() != '') ? $(this).val() : 0;
                }
            });
            certainIncomeData.push(items);
        }
    });

    data['fixed_income'] = fixedIncomeData;
    data['certain_income'] = certainIncomeData;
    return JSON.stringify(data);
}

/** 12 months wise fixed expenses */
const monthWiseFixedExpenseList = () => {
    let list = [];
    let fixedExpense = getTotalFixedExpense();
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = fixedExpense;
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** 12 months wise emi expenses */
const monthWiseEmiExpenseList = () => {
    let list = [];
    let emiExpense = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        emiExpense = expensesRecord.emi_expenses;
    }
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = parseInt(0);
        if (emiExpense.length) {
            for (let i = 0; i < emiExpense.length; i++) {
                let mnc = emiExpense[i].months; 
                let mn = emiExpense[i].title;
                let amt = (emiExpense[i].amount) ? parseInt(emiExpense[i].amount) : 0;
                if (mnc != '' && mnc != '0' && mnc > 0) {
                    mn = mn.split(', ');
                    if (mn.includes(item)) {
                        listItem['amount'] = listItem['amount'] + amt;
                    }
                }
            }
        }
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** 12 months wise diposit expenses */
const monthWiseDipositExpenseList = () => {
    let list = [];
    let dipositExpense = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        dipositExpense = expensesRecord.diposit_expenses;
    }
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = parseInt(0);
        if (dipositExpense.length) {
            for (let i = 0; i < dipositExpense.length; i++) {
                let mnc = dipositExpense[i].months; 
                let mn = dipositExpense[i].title;
                let amt = (dipositExpense[i].amount != '') ? parseInt(dipositExpense[i].amount) : 0;
                if (mnc != '' && mnc != '0' && mnc > 0) {
                    mn = mn.split(', ');
                    if (mn.includes(item)) {
                        listItem['amount'] = listItem['amount'] + amt;
                    }
                }
            }
        }
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** 12 months wise predicted expenses */
const monthWisePredictedExpenseList = () => {
    let list = [];
    let predictedExpense = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        predictedExpense = expensesRecord.predicted_expenses;
    }
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = parseInt(0);
        if (predictedExpense.length) {
            for (let i = 0; i < predictedExpense.length; i++) {
                let mnc = predictedExpense[i].months; 
                let mn = predictedExpense[i].title;
                let amt = (predictedExpense[i].amount != '') ? parseInt(predictedExpense[i].amount) : 0;
                if (mnc != '' && mnc != '0' && mnc > 0) {
                    mn = mn.split(', ');
                    if (mn.includes(item)) {
                        listItem['amount'] = listItem['amount'] + amt;
                    }
                }
            }
        }
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** 12 months wise fixed incomes */
const monthWiseFixedIncomeList = () => {
    let list = [];
    let fixedIncome = getTotalFixedIncome();
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = fixedIncome;
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** 12 months wise certain incomes */
const monthWiseCertainIncomeList = () => {
    let list = [];
    let certainIncome = [];
    let incomeRecord = JSON.parse(collectIncomeData());
    if (incomeRecord) {
        certainIncome = incomeRecord.certain_income;
    }
    months.forEach(function(item) {
        let listItem = {};
        listItem['month'] = item;
        listItem['amount'] = parseInt(0);
        if (certainIncome.length) {
            for (let i = 0; i < certainIncome.length; i++) {
                let mnc = certainIncome[i].months; 
                let mn = certainIncome[i].title;
                let amt = (certainIncome[i].amount != '') ? parseInt(certainIncome[i].amount) : 0;
                if (mnc != '' && mnc != '0' && mnc > 0) {
                    mn = mn.split(', ');
                    if (mn.includes(item)) {
                        listItem['amount'] = listItem['amount'] + amt;
                    }
                }
            }
        }
        list.push(listItem);
    });
    return JSON.stringify(list);
}

/** Display/render certail monts in table */
const certainMonths = () => {
    let list = [];
    let incomeRecord = JSON.parse(collectIncomeData());
    if (incomeRecord) {
        let certainExpense = incomeRecord.certain_income;
        if (certainExpense.length) {
            months.forEach(function(item) {
                for (let i = 0; i < certainExpense.length; i++) {
                    let mnc = certainExpense[i].months; 
                    let mn = certainExpense[i].title;
                    if (mnc != '' && mnc != '0' && mnc > 0) {
                        mn = mn.split(', ');
                        if (mn.includes(item)) {
                            list.push(item);
                        }
                    }
                }
            });
        }
    }
    return [...new Set(list)];
}

/** Display/render emi monts in table */
const emiMonths = () => {
    let list = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        let emiExpense = expensesRecord.emi_expenses;
        if (emiExpense.length) {
            months.forEach(function(item) {
                for (let i = 0; i < emiExpense.length; i++) {
                    let mnc = emiExpense[i].months; 
                    let mn = emiExpense[i].title;
                    if (mnc != '' && mnc != '0' && mnc > 0) {
                        mn = mn.split(', ');
                        if (mn.includes(item)) {
                            list.push(item);
                        }
                    }
                }
            });
        }
    }
    return [...new Set(list)];
}

/** Display/render diposit monts in table */
const dipostMonths = () => {
    let list = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        let dipositExpense = expensesRecord.diposit_expenses;
        if (dipositExpense.length) {
            months.forEach(function(item) {
                for (let i = 0; i < dipositExpense.length; i++) {
                    let mnc = dipositExpense[i].months; 
                    let mn = dipositExpense[i].title;
                    if (mnc != '' && mnc != '0' && mnc > 0) {
                        mn = mn.split(', ');
                        if (mn.includes(item)) {
                            list.push(item);
                        }
                    }
                }
            });
        }
    }
    return [...new Set(list)];
}

/** Display/render predicted monts in table */
const predictedMonths = () => {
    let list = [];
    let expensesRecord = JSON.parse(collectExpenseData());
    if (expensesRecord) {
        let predictedExpense = expensesRecord.predicted_expenses;
        if (predictedExpense.length) {
            months.forEach(function(item) {
                for (let i = 0; i < predictedExpense.length; i++) {
                    let mnc = predictedExpense[i].months; 
                    let mn = predictedExpense[i].title;
                    if (mnc != '' && mnc != '0' && mnc > 0) {
                        mn = mn.split(', ');
                        if (mn.includes(item)) {
                            list.push(item);
                        }
                    }
                }
            });
        }
    }
    return [...new Set(list)];
}

/** Get total diposit expenses */
const getTotalDipositExpense = () => {
    let totalDipositExpenseAmount = parseInt(0);
    $('.diposit-expense-amount').each(function() {
        if ($(this).val() != '') {
            totalDipositExpenseAmount = totalDipositExpenseAmount + parseInt($(this).val());
        }
    });
    return totalDipositExpenseAmount;
}

const getTotalPredictedExpense = () => {
    let totalPredictedExpenseAmount = parseInt(0);
    $('.predicted-expense-amount').each(function() {
        if ($(this).val() != '') {
            totalPredictedExpenseAmount = totalPredictedExpenseAmount + parseInt($(this).val());
        }
    });
    return totalPredictedExpenseAmount;
}

/** Get total emi expenses */
const getTotalEmiExpense = () => {
    let totalEmiExpenseAmount = parseInt(0);
    $('.emi-expense-amount').each(function() {
        if ($(this).val() != '') {
            totalEmiExpenseAmount = totalEmiExpenseAmount + parseInt($(this).val());
        }
    });
    return totalEmiExpenseAmount;
}

/** Get total fixed expenses */
const getTotalFixedExpense = () => {
    let totalFixedExpenseAmount = parseInt(0);
    $('.gen-expense-amount').each(function() {
        if ($(this).val() != '') {
            totalFixedExpenseAmount = totalFixedExpenseAmount + parseInt($(this).val());
        }
    });
    return totalFixedExpenseAmount;
}

/** Get total fixed incomes */
const getTotalFixedIncome = () => {
    let totalFixedIncomeAmount = parseInt(0);
    $('.fixed-income-amount').each(function() {
        if ($(this).val() != '') {
            totalFixedIncomeAmount = totalFixedIncomeAmount + parseInt($(this).val());
        }
    });
    return totalFixedIncomeAmount;
}

/** Get total certail incomes */
const getTotalCertainIncome = () => {
    let totalCertainIncomeAmount = parseInt(0);
    $('.certain-income-amount').each(function() {
        if ($(this).val() != '') {
            totalCertainIncomeAmount = totalCertainIncomeAmount + parseInt($(this).val());
        }
    });
    return totalCertainIncomeAmount;
}

/** SweetAlert2 custom function */
const displayAlert = (icon = 'success', title = '', text = '', confirmButtonText = 'OK') => {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonColor: '#0d6efd',
        confirmButtonText: confirmButtonText
    });
}

/** SweetAlert2 custom function */
const displayLoading = (title = 'Please Wait...', text = "System Processing Your Request") => {
    Swal.fire({
        title: title,
        text: text,
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 6000,
        didOpen: () => {
            Swal.showLoading()
        }
    });
}

const reportTableId = 'onexReportTab';

/** Report generation process */
const generateAllReports = () => {
    
    createBaseReportTable();
    
    createMonthsNameRow();
    
    createAllExpenseRows();
    createAllIncomeRows();
    
    createTotalExpenseRows();
    createTotalIncomeRows();
    createTotalSaveRows();

    createYearlyTotalTable();

    scrollToDiv('#tableReportChart');
}

/** Yearly Total Report */
const createYearlyTotalTable = () => {
    let reportTab = $('<table/>');
    reportTab.addClass('table table-sm table-bordered table-striped my-3');

    let reportTabThead = $('<thead class="report-tab-thead"/>');
    let reportTabTbody = $('<tbody class="report-tab-tbody"/>');
    let reportTabTfoot = $('<tfoot class="report-tab-tfoot"/>');

    let th = $('<tr/>');
    th.append('<th class="total-income">Total Income</th>');
    th.append('<th class="total-expense">Total Expense</th>');
    th.append('<th class="total-inhand">Total In-Hand</th>');
    reportTabThead.append(th);

    let incomeData = JSON.parse(collectIncomeData());
    let expenseData = JSON.parse(collectExpenseData());
    let _totalIncome = parseInt(0);
    let _totalExpense = parseInt(0);
    let _totalInhand = parseInt(0);
    if (incomeData) {
        let fi = incomeData.fixed_income; 
        if ((fi) && fi.length) {
            fi.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalIncome = _totalIncome + parseInt(amt);
            });
        }
        let ci = incomeData.certain_income; 
        if ((ci) && ci.length) {
            ci.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalIncome = _totalIncome + parseInt(amt);
            });
        }
    }

    if (expenseData) {
        let fe = incomeData.fixed_expenses; 
        if ((fe) && fe.length) {
            fe.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalExpense = _totalExpense + parseInt(amt);
            });
        }
        let ee = incomeData.emi_expenses; 
        if ((ee) && ee.length) {
            ee.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalExpense = _totalIncome + parseInt(amt);
            });
        }
        let de = incomeData.diposit_expenses; 
        if ((de) && de.length) {
            de.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalExpense = _totalIncome + parseInt(amt);
            });
        }
        let pe = incomeData.predicted_expenses; 
        if ((pe) && pe.length) {
            pe.forEach(function(item) {
                let amt = (item.amount != '') ? item.amount : 0;
                _totalExpense = _totalIncome + parseInt(amt);
            });
        }
    }
    _totalInhand = _totalIncome - _totalExpense;

    const expenseInPercentage = parseFloat((parseInt(_totalExpense)/parseInt(_totalIncome)) * 100).toFixed(2);
    const inhandInPercentage = parseFloat((parseInt(_totalInhand)/parseInt(_totalIncome)) * 100).toFixed(2);

    let tr = $('<tr/>');
    tr.append(`<td class="total-income"><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(_totalIncome)}</td>`);
    tr.append(`<td class="total-expense"><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(_totalExpense)}</td>`);
    tr.append(`<td class="total-inhand"><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(_totalInhand)}</td>`);
    reportTabTbody.append(tr);

    let tr2 = $('<tr/>');
    tr2.append(`<td class="total-income-perc"></td>`);
    tr2.append(`<td class="total-expense-perc">${expenseInPercentage}%</td>`);
    tr2.append(`<td class="total-inhand-perc">${inhandInPercentage}%</td>`);
    reportTabTbody.append(tr2);

    reportTab.append(reportTabThead);
    reportTab.append(reportTabTbody);
    reportTab.append(reportTabTfoot);

    $('#tableReportTotal').find('.table-responsive').html(reportTab);
    $('#tableReportTotal').show(300);
}

/** Report base table creation */
const createBaseReportTable = () => {

    let reportTab = $('<table/>');
    reportTab.addClass('table table-sm table-bordered table-striped my-3');
    reportTab.attr('id', reportTableId);

    let reportTabThead = $('<thead class="report-tab-thead"/>');
    let reportTabTbody = $('<tbody class="report-tab-tbody"/>');
    let reportTabTfoot = $('<tfoot class="report-tab-tfoot"/>');

    reportTab.append(reportTabThead);
    reportTab.append(reportTabTbody);
    reportTab.append(reportTabTfoot);

    $('#tableReportChart').find('.table-responsive').html(reportTab);
    $('#tableReportChart').show(300);
}

/** Months name header set */
const createMonthsNameRow = () => {
    let tr = $('<tr/>');
    tr.append(`<th class="months-name-th">Months</th>`);
    months.forEach(function(item, index) {
        tr.append(`<th slass="months-th months-th${index}" id="monthsNameTh${index}">${item}</th>`);
    });
    $('table#' + reportTableId).find('thead').append(tr);
}

/** Display all expenses rows */
const createAllExpenseRows = () => {
    setFixedExpenseRow();
    setEmiExpenseRow();
    setDipositExpenseRow();
    setPredictedExpenseRow();
}

/** Display all incomes rows */
const createAllIncomeRows = () => {
    setFixedIncomeRow();
    setCertainIncomeRow();
}

/** TR: fixed expense row */
const setFixedExpenseRow = () => {
    let data = monthWiseFixedExpenseList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="fixed-expense-th">Fixed Expenses</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-fixed-expense-td num-td rpt-fixed-expense-td${index}" id="rptFixedExpenseTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: emi expense row */
const setEmiExpenseRow = () => {
    let data = monthWiseEmiExpenseList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="emi-expense-th">EMI & Loan Expenses</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-emi-expense-td num-td rpt-emi-expense-td${index}" id="rptEmiExpenseTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: diposit expense row */
const setDipositExpenseRow = () => {
    let data = monthWiseDipositExpenseList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="diposit-expense-th">Diposit Expenses</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-diposit-expense-td num-td rpt-diposit-expense-td${index}" id="rptDipositExpenseTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: predicted expense row */
const setPredictedExpenseRow = () => {
    let data = monthWisePredictedExpenseList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="predicted-expense-th">Special Expenses</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-predicted-expense-td num-td rpt-predicted-expense-td${index}" id="rptPredictedExpenseTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: fixed income row */
const setFixedIncomeRow = () => {
    let data = monthWiseFixedIncomeList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="fixed-income-th">Fixed Incomes</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-fixed-income-td num-td rpt-fixed-income-td${index}" id="rptFixedIncomeTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: fixed certain row */
const setCertainIncomeRow = () => {
    let data = monthWiseCertainIncomeList();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr/>');
            tr.append(`<th class="certain-income-th">Certain Incomes</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-certain-income-td num-td rpt-certain-income-td${index}" id="rptCertainIncomeTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** 12 months wise total expenses */
const monthsWiseTotalExpenses = () => {
    let list = [];
    let fixedExpenses = (monthWiseFixedExpenseList()) ? JSON.parse(monthWiseFixedExpenseList()) : [];
    let emiExpenses = (monthWiseEmiExpenseList()) ? JSON.parse(monthWiseEmiExpenseList()) : [];
    let dipositExpenses = (monthWiseDipositExpenseList()) ? JSON.parse(monthWiseDipositExpenseList()) : [];
    let predictedExpenses = (monthWisePredictedExpenseList()) ? JSON.parse(monthWisePredictedExpenseList()) : [];

    if (
        (fixedExpenses.length == months.length) && 
        (emiExpenses.length == months.length) && 
        (dipositExpenses.length == months.length) && 
        (predictedExpenses.length == months.length)
    ) {
        months.forEach(function(item, index) {
            let listItem = {};
            let total = parseInt(0);
            listItem['month'] = item;
            for (var i = 0; i < fixedExpenses.length; i++) {
                if (fixedExpenses[i].month === item) {
                    total = total + parseInt(fixedExpenses[i].amount);
                }
            }
            for (var i = 0; i < emiExpenses.length; i++) {
                if (emiExpenses[i].month === item) {
                    total = total + parseInt(emiExpenses[i].amount);
                }
            }
            for (var i = 0; i < dipositExpenses.length; i++) {
                if (dipositExpenses[i].month === item) {
                    total = total + parseInt(dipositExpenses[i].amount);
                }
            }
            for (var i = 0; i < predictedExpenses.length; i++) {
                if (predictedExpenses[i].month === item) {
                    total = total + parseInt(predictedExpenses[i].amount);
                }
            }
            listItem['amount'] = total;
            list.push(listItem);
        });
    }
    return JSON.stringify(list);
}

/** 12 months wise total incomes */
const monthsWiseTotalIncomes = () => {
    let list = [];
    let fixedIncome = (monthWiseFixedIncomeList()) ? JSON.parse(monthWiseFixedIncomeList()) : [];
    let certainIncome = (monthWiseCertainIncomeList()) ? JSON.parse(monthWiseCertainIncomeList()) : [];

    if (
        (fixedIncome.length == months.length) && 
        (certainIncome.length == months.length)
    ) {
        months.forEach(function(item, index) {
            let listItem = {};
            let total = parseInt(0);
            listItem['month'] = item;
            for (var i = 0; i < fixedIncome.length; i++) {
                if (fixedIncome[i].month === item) {
                    total = total + parseInt(fixedIncome[i].amount);
                }
            }
            for (var i = 0; i < certainIncome.length; i++) {
                if (certainIncome[i].month === item) {
                    total = total + parseInt(certainIncome[i].amount);
                }
            }
            listItem['amount'] = total;
            list.push(listItem);
        });
    }
    return JSON.stringify(list);
}

/** 12 months wise total save */
const monthsWiseTotalSave = () => {
    let list = [];
    let totalIncome = (monthsWiseTotalIncomes()) ? JSON.parse(monthsWiseTotalIncomes()) : [];
    let totalExpense = (monthsWiseTotalExpenses()) ? JSON.parse(monthsWiseTotalExpenses()) : [];

    if (
        (totalIncome.length == months.length) && 
        (totalExpense.length == months.length)
    ) {
        months.forEach(function(item, index) {
            let listItem = {};
            let save = parseInt(0);
            listItem['month'] = item;
            for (var i = 0; i < totalIncome.length; i++) {
                for (var j = 0; j < totalExpense.length; j++) {
                    if ((totalIncome[i].month === item) && (totalExpense[j].month === item)) {
                        save = parseInt(totalIncome[i].amount) - parseInt(totalExpense[j].amount);
                    }
                }
            }
            listItem['amount'] = save;
            list.push(listItem);
        });
    }
    return JSON.stringify(list);
}

/** TR: total expense row */
const createTotalExpenseRows = () => {
    let data = monthsWiseTotalExpenses();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr class="total-expense-tr"/>');
            tr.append(`<th class="total-expense-th">Total Expenses</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-total-expense-td num-td rpt-total-expense-td${index}" id="rptTotalExpenseTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: total income row */
const createTotalIncomeRows = () => {
    let data = monthsWiseTotalIncomes();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr class="total-income-tr"/>');
            tr.append(`<th class="total-income-th">Total Incomes</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-total-income-td num-td rpt-total-income-td${index}" id="rptTotalIncomeTd${index}">${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

/** TR: total save row */
const createTotalSaveRows = () => {
    let data = monthsWiseTotalSave();
    if (data) {
        data = JSON.parse(data);
        if (data.length) {
            let tr = $('<tr class="total-inhand-tr"/>');
            tr.append(`<th class="total-save-th">Cash In-Hand</th>`);
            data.forEach(function(item, index) {
                tr.append(`<td slass="rpt-total-save-td num-td rpt-total-save-td${index}" id="rptTotalSaveTd${index}"><i class="fas fa-rupee-sign"></i> ${displayMoneyFormat(item.amount)}</td>`);
            });
            $('table#' + reportTableId).find('tbody').append(tr);
        }
    }
}

const displayMoneyFormat = (item) => {
    return (item && item != '') ? parseInt(item).toLocaleString("en-US") : 0;
    // return (item && item != '') ? new Intl.NumberFormat().format(item) : 0;
}

const scrollToDiv = (selector) => {
    $('html, body').animate({
        scrollTop: $(selector).offset().top
    }, 2000);
}

$('body').on('click', '#generateReportBtn', function() {
    displayLoading();
    generateAllReports();
    $('#generateReportBtn').hide();
    isReportAdded = true;
    scrollToDiv('#tableReportChart');
});

$('#tableReportHolder').on('scroll', function () {
    if ($(this).scrollLeft() > 0) {
        $('#tableReportHolder table thead tr th:first-child').addClass('fix-tab-cell');
        $('#tableReportHolder table tbody tr th:first-child').addClass('fix-tab-cell');
    } else {
        $('#tableReportHolder table thead tr th:first-child').removeClass('fix-tab-cell');
        $('#tableReportHolder table tbody tr th:first-child').removeClass('fix-tab-cell');
    }
});

$(document).ready(function() {
    pageLoadInit();
    expenseSelect2Init();
    incomeSelect2Init();
});

/**
 * Task
 * 1. create a table to show yearly - total expense, total income, total in-hand
 * 2. in-hand > 75% ===> aswome, > 60% ==> excellent, > 50% ==> very good, > 40% ===> good, > 30% ===> avarage, > 20% ===> poor, > 10% > very poor 
 * 3. report conclulation tagline => basedon in-hand
 * 4. print page - as much as you do better */