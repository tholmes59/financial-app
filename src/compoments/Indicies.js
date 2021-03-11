import React, {useState, useEffect} from 'react';

const Indicies = () => {

    const [index, setIndex] = useState([])

    useEffect(() => {
        const loadIndex = async () => {
            const index = await fetch(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=3981e8e851120273545312697c324333`)
            .then(res => res.json())
            .then(data => data)
            setIndex(index)
        }
        loadIndex()
    }, [])

    let keys = ['symbol']
    let values = ['^DJITR', '^RUT']

    let indicies = index.filter(e => {
        return keys.every(a => {
            return values.includes(e[a])
        })
    })

    console.log(index)
    console.log(indicies)
    return (
        <div>
            
        </div>
    );
}

export default Indicies;