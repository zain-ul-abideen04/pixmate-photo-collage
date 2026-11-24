'use client'
import React,{useState} from "react"
import Link from "next/link"
import Image from "next/image"

import Modal from 'react-bootstrap/Modal';

export default function AddBlog(){
    let [show, setShow] = useState(false);

    let [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
        <div className="mt-4 mt-sm-0">
            <Link href="#" className="btn btn-primary" onClick={() =>setShow(true)}>Add Blog</Link>
        </div>
        <Modal show={show} onHide={() =>setShow(false)} size="lg" centered>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">Add Blog</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-grid">
                            <p className="text-muted">Upload your blog image here, Please click "Upload Image" Button.</p>
                            {file === null ?
                                    <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>:
                                    <Image src={file} width={0} height={0} sizes="100vw" alt="" style={{width:'100%', height:'auto'}}/>
                                }
                                
                                <input type="file" id="input-file" name="input-file" accept="image/*" className="btn-upload btn btn-primary mt-4" onChange={handleChange} hidden/>
                            <label className="btn-upload btn btn-primary mt-4" htmlFor="input-file">Upload Image</label>
                        </div>
                    </div>

                    <div className="col-md-8 mt-4 mt-sm-0">
                        <div className="ms-md-4">
                            <form>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Blog Title <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Title :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"> Date : </label>
                                            <input name="date" type="text" className="form-control start" id="date" defaultValue="Select date:"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label"> Time to read : </label>
                                            <input name="time" type="text" className="form-control" id="time" defaultValue="5 min read"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Tag</label>
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

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Description <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Blog description :"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 text-end">
                                        <button type="submit" className="btn btn-primary">Add Blog</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}
