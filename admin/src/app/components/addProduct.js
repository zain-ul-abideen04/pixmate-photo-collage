'use client'
import React,{useState} from "react"
import Link from "next/link"

import Modal from 'react-bootstrap/Modal';

export default function AddProduct(){
    let [show, setShow] = useState(false);
    let [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return(
        <>
        <div className="mt-4 mt-sm-0">
            <Link href="#" className="btn btn-primary" onClick={()=>setShow(true)}>Add Product</Link>
        </div>
        <Modal show={show} onHide={()=>setShow(false)} size="lg" centered>
            <Modal.Header closeButton>
            <h5 className="modal-title" id="exampleModalLabel">Add Shop Product</h5>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-grid me-md-4">
                            <p className="text-muted">Upload your shop image here, Please click "Upload Image" Button.</p>
                            {file === null ?
                                <div className="preview-box d-block justify-content-center rounded shadow overflow-hidden bg-light p-1"></div>:
                                <img src={file} alt="" style={{width:'100%', height:'auto'}}/>
                            }
                            
                            <input type="file" id="input-file" name="input-file" accept="image/*" className="btn-upload btn btn-primary mt-4" onChange={handleChange} hidden/>
                            
                            <label className="btn-upload btn btn-primary mt-4" htmlFor="input-file">Upload Image</label>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 mt-sm-0">
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div className="mb-3">
                                        <label className="form-label">Shop Title <span className="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Title :"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label"> Price: </label>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text border bg-transparent" id="basic-addon1">$</span>
                                            <input type="number" min="0" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Label:</label>
                                        <select className="form-select form-control">
                                            <option value="FE">Featured</option>
                                            <option value="NE">New</option>
                                            <option value="PO">Popular</option>
                                            <option value="RE">Recent</option>
                                            <option value="FR">Free</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label"> Rating : </label>
                                        <input name="time" type="text" className="form-control" id="time" value="0"/>
                                    </div>
                                </div>

                                <div className="col-lg-12 text-end">
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
            
        </Modal>
        </>
    )
}