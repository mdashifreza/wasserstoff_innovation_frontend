import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import AddressDetails from './AddressDetails';
import axios from 'axios';

function SearchAddress() {
    const [searchAdd, setSearchAdd] = useState("");
    const [addDetail, setAddDetails] = useState("");
    const [displayAddDetail, setDisplayAddDetail] = useState(false)

    const handleChange = (walletAdd) => {
        setSearchAdd(walletAdd.target.value);
    }

    const searchAddressHandle = async () => {
        try {
            // const url = "http://localhost:8080/api/address-search";
            const url = "https://api.etherscan.io/api?module=account&action=txlist&address=0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=ZJKR78KDP7MJ334H4K423I1G3589ICEWQK";

            const url2 = "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=ZJKR78KDP7MJ334H4K423I1G3589ICEWQK";

            if (!searchAdd.trim()) {
                console.log("Please enter a valid address.");
                return;
            }
            const response = await axios.get(url2, {
                params: { wallAddToSearch: searchAdd },
            });
            // console.log("fffff", response.data)
            setAddDetails(response.data.result)
            setDisplayAddDetail(true);
        } catch (error) {
            console.log("error while getting address data", error.message)
        }
    }

    return (
        <section>
            <section className='flex flex-col justify-center items-center mt-10 mx-auto'>
                <h3 className=''>The BlockChain  Explorer</h3>
                <section className='flex'>
                    <input
                        type="text"
                        maxLength="120"
                        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                        className='border-2 p-1 rounded w-[500px] h-10 placeholder: text-sm'
                        required
                        value={searchAdd}
                        onChange={handleChange}
                    />
                    <button className='bg-sky-600 text-white w-7 flex items-center justify-center rounded -mx-9 m-1'
                        onClick={searchAddressHandle}
                    ><CiSearch size={20} /></button>
                </section>
            </section>
            {displayAddDetail && <AddressDetails addDetail={{ addDetail, searchAdd }} />}
        </section>
    )
}
export default SearchAddress;
