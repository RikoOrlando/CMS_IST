import React from 'react'
import {useSelector} from 'react-redux'
import Card from './card'

export default function CardList({table}) {
    const data = useSelector(state => state.data[table])
    return (
        <div className="card-group">
            {/* <div className="row"> */}
                {
                    data.map((el, i) => {
                        return (
                            <Card key={el.id} data={el} table={table}/>
                        )
                    })
                }
            {/* </div> */}
        </div>
    )
    
}