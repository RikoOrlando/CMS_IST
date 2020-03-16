import React from 'react'
import {useSelector} from 'react-redux'
import Row from './rowTableRole'

export default function Table({table, column, read}) {
    const data = useSelector(state => state.data[table])

    return (
        <div className="table-responsive">
            <table className="table tableData">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">{column.first}</th>
                    <th scope="col">{column.second}</th>
                    <th scope="col">Created</th>
                    <th scope="col">Modified</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i) => {
                            return (
                                <Row key={el.id} index={i} data={el} read={read} table={table}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}