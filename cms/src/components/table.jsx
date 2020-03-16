import React from 'react'
import {useSelector} from 'react-redux'
import Row from './tableRow'

export default function Table({table}) {
    const data = useSelector(state => state.data[table])
    return (
        <div className="wrap table-responsive">
            <div className="row bg-dark headTable">
                <div className="col-1 columnTable">No</div>
                <div className="col-3 columnTable">Title</div>
                <div className="col-3 columnTable">Description</div>
                <div className="col-1 columnTable">Created</div>
                <div className="col-1 columnTable">Modified</div>
                <div className="col-1 columnTable">Status</div>
                <div className="col-2 columnTable">Action</div>
            </div>
            {
                data.map((el, i) => {
                    return (
                        <Row data={el} index={i} key={el.id} table={table}/>
                    )
                })
            }
        </div>
        // <div className="table-responsive">
        //     <table className="table tableData">
        //         <thead className="thead-dark">
        //             <tr>
        //             <th scope="col">No</th>
        //             <th scope="col">Title</th>
        //             <th scope="col">Description</th>
        //             <th scope="col">Created</th>
        //             <th scope="col">Modified</th>
        //             <th scope="col">Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //                 data.map((el, i) => {
        //                     return (
        //                         <tr key={el.id}>
        //                         <th scope="row">{i+1}</th>
        //                         <td>{el.title}</td>
        //                         <td className="descript"><p>{el.Description}</p></td>
        //                         <td>{el.created_by}</td>
        //                         <td>{el.modified_by}</td>
        //                         <td><span className="deleteItem">Delete</span><span>Update</span></td>
        //                         </tr>
        //                     )
        //                 })
        //             }
        //         </tbody>
        //     </table>
        // </div>
    )
}