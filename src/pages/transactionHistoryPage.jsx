import { useEffect, useState } from "react";
import TableTransactionHistory from "../components/tableTransactionHistory";
import axios from "axios";

const TransactionHistoryPage = () => {
    const [transactions, setTransactions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionsPerPage] = useState(10);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/pos/api/listtransaksi');
                setTransactions(response.data);
            } catch (error) {
                console.log('Error fetching transactions: ', error);
            }
        };
        fetchTransactions();
    }, []);

    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="text-left">
            <h1>Riwayat Transaksi</h1>
            <TableTransactionHistory 
                transactions={currentTransactions} 
                transactionsPerPage={transactionsPerPage} 
                totalTransactions={transactions.length} 
                paginate={paginate} 
                currentPage={currentPage}
            />
        </div>
    )
};

export default TransactionHistoryPage;
