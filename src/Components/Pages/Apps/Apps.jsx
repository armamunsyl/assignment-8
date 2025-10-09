import React, { Suspense, useState } from 'react'
import App from '../../App/App'



const Apps = ({ data }) => {
    const [TrendApp, setTrendApp] = useState([]);

    const AppPromise = fetch('/public/TrendingApp.json').then(res => res.json())
    return (
        <div className='grid grid-cols-4 gap-6 mb-10'>
            <Suspense>
                {
                    data.map((SingleApp) => <App key={SingleApp.id} SingleApp={SingleApp}></App>)
                }
            </Suspense>
        </div>
    )
}

export default Apps