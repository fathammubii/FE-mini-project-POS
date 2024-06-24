

const tableRiwayatTransaksi = () => {
    return(
        <table className='table-auto text-left w-full border-2 border-gray-200'>
        <thead>
            <tr>
                <th>Tanggal Transaksi</th>
                <th>ID Transaksi</th>
                <th>Total Harga</th>
                <th>Total Bayar</th>
                <th>Action</th>
            </tr>
        </thead>

    </table>
    )
}

export default tableRiwayatTransaksi;