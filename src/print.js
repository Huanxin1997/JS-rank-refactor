function printBanner() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function printOwing (invoice) {
    let outstanding = 0;
    printBanner();

    // calculate outstanding
    for (const borderSpacing of invoice.borderSpacing) {
        outstanding += borderSpacing.amount;
    }

    // record due date
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    // print details
    printDetails(invoice, outstanding);
}