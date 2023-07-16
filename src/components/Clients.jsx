import React from 'react'
import ClientCard from './ClientCard'

export default function Clients() {
  return (
    <div className='clientSection'>
        <div>
            <h1 className='hometitle'>See What Our Users Have to Say</h1>
            <div className='iconsDiv'>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-g2-crowd.png" alt="" height={"50px"} />
               <div >
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>They are the best of the best</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-shorty-awards.png" alt="" height={"50px"} />
                <div>
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>They are the best of the best</p>
               </div>
                </div>
                <div className='iconsCard'>

                <img src="https://images.wondershare.com/filmora/filmora12/product/user-getapp.png" alt="" height={"50px"} />
                <div >
                 <h1 className='clientTitle'>BeInCrypto</h1>
                 <p className='clientText'>They are the best of the best</p>
               </div>
                </div>
            </div>
        </div>
        <div className='clientCardDiv2'>
        <ClientCard/>
        <ClientCard/>
        <ClientCard/>
        </div>

    </div>
  )
}
