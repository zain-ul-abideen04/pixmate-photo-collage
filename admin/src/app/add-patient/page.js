import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import ScrollBar from "../components/scrollBar";

import { doctorData } from '../data/data'

export default function AddPatients(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Add New Patient</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link href="/patients">Patients</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add Patient</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-8 mt-4">
                            <div className="card border-0 p-4 rounded shadow">
                                <div className="row align-items-center">
                                    <div className="col-lg-2 col-md-4">
                                        <Image src='/images/client/01.jpg' width={80} height={80} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                                    </div>
        
                                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                        <h5 className="">Upload your picture</h5>
                                        <p className="text-muted mb-0">For best results, use an image at least 600px by 600px in either .jpg or .png format</p>
                                    </div>
        
                                    <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                        <Link href="#" className="btn btn-primary">Upload</Link>
                                        <Link href="#" className="btn btn-soft-primary ms-2">Remove</Link>
                                    </div>
                                </div>
        
                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">First Name</label>
                                                <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Last Name</label>
                                                <input name="name" id="name2" type="text" className="form-control" placeholder="Last Name :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email</label>
                                                <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                            </div> 
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Phone no.</label>
                                                <input name="number" id="number" type="text" className="form-control" placeholder="Phone no. :"/>
                                            </div>                                                                               
                                        </div>

                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label"> Date : </label>
                                                <input name="date" type="text" className="form-control start" placeholder="Select date :"/>
                                            </div>
                                        </div>
        
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">Departments</label>
                                                <select className="form-select form-control">
                                                    <option defaultValue="EY">Eye Care</option>
                                                    <option defaultValue="GY">Gynecologist</option>
                                                    <option defaultValue="PS">Psychotherapist</option>
                                                    <option defaultValue="OR">Orthopedic</option>
                                                    <option defaultValue="DE">Dentist</option>
                                                    <option defaultValue="GA">Gastrologist</option>
                                                    <option defaultValue="UR">Urologist</option>
                                                    <option defaultValue="NE">Neurologist</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
        
                                    <button type="submit" className="btn btn-primary">Add Patient</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card rounded border-0 shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="mb-0">Doctors List</h5>
                                </div>
                                <ScrollBar style={{height:'629px'}}>
                                    <ul className="list-unstyled mb-0 p-4 pt-0">
                                        {doctorData.map((item,index) =>{
                                            return(
                                                <li className="d-md-flex align-items-center text-center text-md-start mt-4" key={index}>
                                                    <Image src={item.image} width={110} height={110} className="avatar avatar-medium rounded-md shadow" alt=""/>

                                                    <div className="ms-md-3 mt-4 mt-sm-0">
                                                        <Link href="#" className="text-dark h6">{item.name}</Link>
                                                        <p className="text-muted my-1">{item.title}</p>
                                                        <p className="text-muted mb-0">{item.exp}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                         <li className="mt-4">
                                            <Link href="/doctors" className="btn btn-primary">All Doctors</Link>
                                        </li>
                                    </ul>
                                </ScrollBar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}