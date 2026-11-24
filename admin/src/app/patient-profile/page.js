import React from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "../components/wrapper";
import PatientProfileTab from "../components/patientProfileTab";
import ScrollBar from "../components/scrollBar";

import { LuUser2, FiMail, SlBookOpen, MdOutlineFormatItalic, GiMedicalDrip} from '../assets/icons/vander'
import {doctorData} from '../data/data'

export default function PatientProfile(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Patient Profile</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/index">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link href="/patients">Patients</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profile</li>
                            </ul>
                        </nav>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-5 mt-4">
                            <div className="rounded shadow overflow-hidden">
                                <div className="card border-0">
                                    <Image src='/images/bg/bg-profile.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>
    
                                <div className="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                                    <Image src='/images/client/09.jpg' width={80} height={80} className="rounded-circle shadow-md avatar avatar-md-md" alt=""/>
                                    <h5 className="mt-3 mb-1">Christopher Burrell</h5>
                                    <p className="text-muted mb-0">25 Years old</p>
                                </div>
    
                                <div className="list-unstyled p-4">
                                    <div className="progress-box mb-4">
                                        <h6 className="title">Complete your profile</h6>
                                        <div className="progress">
                                            <div className="progress-bar position-relative bg-primary" style={{width:'89%'}}>
                                                <div className="progress-value d-block text-muted h6">89%</div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="d-flex align-items-center mt-3">
                                        <LuUser2 className="align-text-bottom text-primary h5 mb-0 me-2"/>
                                        <h6 className="mb-0">Gender</h6>
                                        <p className="text-muted mb-0 ms-2">Female</p>
                                    </div>
                                    
                                    <div className="d-flex align-items-center mt-3">
                                        <FiMail className="align-text-bottom text-primary h5 mb-0 me-2"/>
                                        <h6 className="mb-0">Birthday</h6>
                                        <p className="text-muted mb-0 ms-2">19th January 1995</p>
                                    </div>
                                    
                                    <div className="d-flex align-items-center mt-3">
                                        <SlBookOpen className="align-text-bottom text-primary h5 mb-0 me-2"/>
                                        <h6 className="mb-0">Phone No.</h6>
                                        <p className="text-muted mb-0 ms-2">+(125) 458-8547</p>
                                    </div>
                                    
                                    <div className="d-flex align-items-center mt-3">
                                        <MdOutlineFormatItalic className="align-text-bottom text-primary h5 mb-0 me-2"/>
                                        <h6 className="mb-0">Address</h6>
                                        <p className="text-muted mb-0 ms-2">Sydney, Australia</p>
                                    </div>
                                    
                                    <div className="d-flex align-items-center mt-3">
                                        <GiMedicalDrip className="align-text-bottom text-primary h5 mb-0 me-2"/>
                                        <h6 className="mb-0">Blood Group</h6>
                                        <p className="text-muted mb-0 ms-2">B +</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <PatientProfileTab/>

                        <div className="col-lg-4 mt-4">
                            <div className="card rounded border-0 shadow">
                                <div className="p-4 border-bottom">
                                    <h5 className="mb-0">Doctors List</h5>
                                </div>
                                <ScrollBar style={{height:'664px'}}>
                                    <ul className="list-unstyled mb-0 p-4">
                                        {doctorData.map((item,index) =>{
                                            return(
                                                <li className="d-md-flex align-items-center text-center text-md-start mt-4" key={index}>
                                                    <img src={item.image} className="avatar avatar-medium rounded-md shadow" alt=""/>

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