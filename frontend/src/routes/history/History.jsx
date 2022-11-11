import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/userProvider'
import './history.css'
import { API_KEY } from '../../key'
const History = () => {

    const { currentAccount } = useContext(UserContext)
    const [dato, setDato] = useState([])

    useEffect(() => {
        window.scroll({ top: 0 })
        apiMoralis(currentAccount)
    }, [currentAccount])

    const apiMoralis = async (currentAccount) => {
        try {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'X-API-Key': API_KEY
                }
            };

            const res = await fetch('https://deep-index.moralis.io/api/v2/0x04930fd07eb0b6d5834754DFd2e25EBb77dc168A?chain=0x13881', options);
            const data = await res.json();
            const resultado = data.result
            const filter = resultado.filter(results => results.from_address === currentAccount)
            setDato(filter)

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='divTxs'>
            <h3>my transactions</h3>
            {
                dato.map(Element => (

                    <div className='divTx'>
                        <div className='divTx__divSpan'>
                            <span className='title'>
                                Transaction Hash:
                            </span>
                            <span className='.divTx__divSpan--hash'>
                                {Element.hash}
                            </span>
                        </div>
                        <div className='divTx__divSpan'>
                            <span className='title'>
                                date:
                            </span>
                            <span>
                                {Element.block_timestamp.split('T')[0]}
                            </span>
                        </div>
                        <div className='divTx__divSpan'>
                            <span className='title'>
                                time:
                            </span>
                            <span>
                                {Element.block_timestamp.split('T')[1].split('.')[0] + ' (GMT)'}
                            </span>
                        </div>
                        <div className='divTx__divSpan'>
                            <span className='title'>
                                from:
                            </span>
                            <span className='.divTx__divSpan--hash'>
                                {Element.from_address}
                            </span>
                        </div>
                        <div className='divTx__divSpan'>
                            <span className='title'>
                                contract:
                            </span>
                            <span className='.divTx__divSpan--hash'>
                                {Element.to_address}
                            </span>
                        </div>
                        <div className='divTx__divBsc'>
                            <a Target="_blank" href='https://testnet.bscscan.com/'>
                                View Polygon Scan Testnet
                            </a>
                        </div>
                    </div>
                )
                )

            }
        </div>
    )
}

export default History