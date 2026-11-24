'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Modal from 'react-bootstrap/Modal';

import {FiEye, BsPencil, FiTrash} from '../assets/icons/vander'

export default function PAtientsCrud(){
    let [viewProfile, setViewProfile] = useState(false)
    let [editProfile, setEditProfile] = useState(false)
    return(
        <>
            <td className="text-end p-3">
                <Link href="#" className="btn btn-icon btn-pills btn-soft-primary" onClick={()=>setViewProfile(true)}><FiEye /></Link>
                <Link href="#" className="btn btn-icon btn-pills btn-soft-success mx-1" onClick={()=>setEditProfile(true)}><BsPencil /></Link>
                <Link href="#" className="btn btn-icon btn-pills btn-soft-danger"><FiTrash /></Link>
            </td>
            <Modal show={viewProfile} onHide={()=>setViewProfile(false)} centered>
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel1">Profile</h5>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex align-items-center">
                        <Image src='/images/client/01.jpg' width={65} height={65} className="avatar avatar-small rounded-pill" alt=""/>
                        <h5 className="mb-0 ms-3">Howard Tanner</h5>
                    </div>
                    <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                        <li>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex ms-0">
                                    <h6>Age:</h6>
                                    <p className="text-muted ms-2">25 year old</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6>Gender:</h6>
                                    <p className="text-muted ms-2">Male</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6 className="mb-0">Department:</h6>
                                    <p className="text-muted ms-2 mb-0">Cardiology</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex ms-0">
                                    <h6>Date:</h6>
                                    <p className="text-muted ms-2">20th Dec 2020</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6>Time:</h6>
                                    <p className="text-muted ms-2">11:00 AM</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6 className="mb-0">Doctor:</h6>
                                    <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>
            <Modal show={editProfile} onHide={()=>setEditProfile(false)} centered size="lg">
                <Modal.Header closeButton>
                    <h5 className="modal-title" id="exampleModalLabel1">Profile Settings</h5>
                </Modal.Header>
                <Modal.Body>
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4">
                        <Image src='/images/doctors/01.jpg' width={80} height={80} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                    </div>

                    <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                        <h6 className="">Upload your picture</h6>
                        <p className="text-muted mb-0">For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
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

                        <div className="col-md-12">
                            <div className="mb-3">
                                <label className="form-label">Your Bio Here</label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Bio :"></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save changes"/>
                        </div>
                    </div>
                </form>
                </Modal.Body>
            </Modal>
        </>
    )
}