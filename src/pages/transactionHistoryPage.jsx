
import { useEffect, useState } from "react";
import TableTransactionHistory from "../component/tableTransactionHistory";
import axios from "axios";

const TransactionHistoryPage = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {

            try{
                const response = await axios.get('http://localhost:8080/pos/api/listtransaksi');
                setTransactions(response.data);
            } catch(error){
                console.log('Error fetching transactions: ', error);
            }
        };
        fetchTransactions();
    },[]);

    return (
        <div className="text-left">
            <h1>Riwayat Transaksi</h1>
            <TableTransactionHistory transactions={transactions}/>
        </div>

    )
};

export default TransactionHistoryPage;