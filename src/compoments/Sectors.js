import React, {useState, useEffect} from 'react';

function Sectors() {

    const [sectors, setSectors] = useState([])

    useEffect(() => {
        const loadSectors = async () => {
            const news = await fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=6QNU5ORX2JVNZQDT`)
            .then(res => res.json())
            .then(data => data)
            setSectors(news)
        }
        loadSectors()
    }, [])

    console.log(sectors)
    return (
        <div>
            
        </div>
    );
}

export default Sectors;