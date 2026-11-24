import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";

import { invoiceData } from '../data/data'
import ViewInvoice from "../components/viewInvoice";

export default function InvoiceList(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Invoice List</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Invoice List</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3">Invoice</th>
                                            <th className="border-bottom p-3" style={{minWidth:'220px'}}>Name</th>
                                            <th className="text-center border-bottom p-3" style={{minWidth:'180px'}}>Phone</th>
                                            <th className="text-center border-bottom p-3">Amount</th>
                                            <th className="text-center border-bottom p-3" style={{minWidth:'140px'}}>Generate(Dt.)</th>
                                            <th className="text-center border-bottom p-3">Status</th>
                                            <th className="text-end border-bottom p-3" style={{minWidth:'200px'}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceData.map(( item, index ) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{item.id}</th>
                                                    <td className="p-3">
                                                        <Link href="#" className="text-primary">
                                                            <div className="d-flex align-items-center">
                                                                <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                <span className="ms-2">{item.name}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="text-center p-3">{item.phone}</td>
                                                    <td className="text-center p-3">{item.amount}</td>
                                                    <td className="text-center p-3">{item.date}</td>
                                                    <td className="text-center p-3">
                                                        <div className={`${item.status === 'Unpaid' ? 'bg-soft-danger' : 'bg-soft-success'} badge  rounded px-3 py-1` }>
                                                            {item.status}
                                                        </div>
                                                    </td>
                                                    <td className="text-end p-3">
                                                        <ViewInvoice/>
                                                        <Link href="#" className="btn btn-sm btn-outline-primary ms-2">Print</Link>
                                                    </td>
                                                    
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-12 mt-4">
                            <div className="d-md-flex align-items-center text-center justify-content-between">
                                <span className="text-muted me-3">Showing 1 - 10 out of 50</span>
                                <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                                    <li className="page-item"><Link className="page-link" href="" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
