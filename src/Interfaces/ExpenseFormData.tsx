export type ExpenseFormData = {
    expenseName: string;
    expenseAccount: string;
    date: string;
    amount: number;
    category: string;
    note?: string;
    image?: File;
};