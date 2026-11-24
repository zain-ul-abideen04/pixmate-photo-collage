'use client'
import React,{useState} from "react";
import Link from "next/link";

import Modal from 'react-bootstrap/Modal';

export default function BookAppointment(){
    let [show, setShow] = useState(false);
    return(
        <>
            <div className="d-grid">
                <Link href="#" className="btn btn-primary" onClick={() =>setShow(!show)}>Appointment</Link>
            </div>
            <Modal show={show} onHide={() =>setShow(!show)} size="lg" centered>
                <Modal.Header closeButton>
                <Modal.Title className='h5'>Book an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body p-3 pt-4">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Patient Name <span className="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Patient Name :"/>
                                    </div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6">
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
                                
                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Doctor</label>
                                        <select className="form-select form-control">
                                            <option defaultValue="CA">Dr. Calvin Carlo</option>
                                            <option defaultValue="CR">Dr. Cristino Murphy</option>
                                            <option defaultValue="AL">Dr. Alia Reddy</option>
                                            <option defaultValue="TO">Dr. Toni Kovar</option>
                                            <option defaultValue="JE">Dr. Jessica McFarlane</option>
                                            <option defaultValue="EL">Dr. Elsie Sherman</option>
                                            <option defaultValue="BE">Dr. Bertha Magers</option>
                                            <option defaultValue="LO">Dr. Louis Batey</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                    </div> 
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone <span className="text-danger">*</span></label>
                                        <input name="phone" id="phone" type="tel" className="form-control" placeholder="Your Phone :"/>
                                    </div> 
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> Date : </label>
                                        <input name="date" type="date" className="form-control start" placeholder="Select date :"/>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="input-time">Time : </label>
                                        <input name="time" type="text" className="form-control timepicker" id="input-time" placeholder="03:30 PM"/>
                                    </div> 
                                </div>

                                <div className="col-lg-12">
                                    <div className="mb-3">
                                        <label className="form-label">Comments <span className="text-danger">*</span></label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">Book An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
