import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";

import {patientData} from '../data/data'
import PatientsCrud from "../components/patientsCrud";

export default function Patients(){
    return(
        <Wrapper>
             <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Patients List</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Patients</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="table-responsive shadow rounded">
                                <table className="table table-center bg-white mb-0">
                                    <thead>
                                        <tr>
                                            <th className="border-bottom p-3" style={{minWidth:'50px'}}>Id</th>
                                            <th className="border-bottom p-3" style={{minWidth:'180px'}}>Name</th>
                                            <th className="border-bottom p-3">Age</th>
                                            <th className="border-bottom p-3">Gender</th>
                                            <th className="border-bottom p-3">Address</th>
                                            <th className="border-bottom p-3">Mobile No.</th>
                                            <th className="border-bottom p-3">Department</th>
                                            <th className="border-bottom p-3" style={{minWidth:'150px'}}>Date</th>
                                            <th className="border-bottom p-3">Time</th>
                                            <th className="border-bottom p-3">Status</th>
                                            <th className="border-bottom p-3" style={{minWidth:'100px'}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {patientData.map((item, index) =>{
                                            return(
                                                <tr key={index}>
                                                    <th className="p-3">{item.id}</th>
                                                    <td className="py-3">
                                                        <Link href="#" className="text-dark">
                                                            <div className="d-flex align-items-center">
                                                                <Image src={item.image} width={45} height={45}  className="avatar avatar-md-sm rounded-circle shadow" alt=""/>
                                                                <span className="ms-2">{item.name}</span>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="p-3">{item.age}</td>
                                                    <td className="p-3">{item.gender}</td>
                                                    <td className="p-3">{item.address}</td>
                                                    <td className="p-3">{item.mobileNo}</td>
                                                    <td className="p-3">{item.Department}</td>
                                                    <td className="p-3">{item.date}</td>
                                                    <td className="p-3">{item.time}</td>
                                                    <td className="p-3">
                                                        {item.status === 'Approved' ? 
                                                            <span className="badge bg-soft-success">Approved</span>:
                                                            <span className="badge bg-soft-warning">Pending</span>
                                                        }
                                                    </td>
                                                    <PatientsCrud/>
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
                                    <li className="page-item"><Link className="page-link" href="#" aria-label="Previous">Prev</Link></li>
                                    <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#" aria-label="Next">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}