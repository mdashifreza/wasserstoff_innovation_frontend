import React from 'react';
import moment from 'moment';

function AddressDetails({ addDetail, searchAdd }) {
    // console.log("props", addDetail, searchAdd);
    const AllBtn = ["Transaction Hash", "Method", "Block", "Age", "From", "To", "Value", "Txn Fee"];
    return (
        <section className=''>
            <div className='mt-8 rounded border-2 mx-2 p-2'>
                <div>Latest 25 From a total of <span>{addDetail?.addDetail?.length}</span> transactions</div>
                <table className='text-sm w-full'>
                    <thead>
                        <tr >
                            <th>Transaction Hash</th>
                            <th>Method</th>
                            <th>Block</th>
                            <th className=''>Age</th>
                            <th>From</th>
                            <th></th>
                            <th>To</th>
                            <th>Value</th>
                            <th className=''>Txn Fee</th>
                        </tr>
                    </thead>.unix
                    <tbody>
                        {addDetail?.addDetail?.map((txn) => (
                            <tr className='border-b-2 mt-10' key={txn.hash}>
                                <td>{txn.hash.slice(0, 18)}...</td>
                                <td>
                                    <span className=''>Transfer</span>
                                </td>
                                <td className=''>{txn.blockNumber}</td>
                                <td>{moment.unix(txn.timeStamp).fromNow()}</td>
                                <td>
                                    {txn.from.slice(0, 8)}...{txn.from.slice(34)}
                                </td>
                                <td>
                                    <span
                                        className={`${txn.from !== searchAdd
                                                ? "bg-gray-200 rounded border-2 border-teal-100 text-teal-600 py-0.5 px-1 text-sm"
                                                : "bg-yellow-500 text-white"
                                            }`}
                                    >
                                        {txn.from !== searchAdd ? "IN" : "OUT"}
                                    </span>
                                </td>
                                <td>
                                    {txn.to.slice(0, 8)}...{txn.to.slice(34)}
                                </td>
                                <td>{(txn.value / 10 ** 18).toFixed(5)} ETH</td>
                                <td>{(txn.gasPrice / 10 ** 18).toFixed(12)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default AddressDetails;
