'use client'
import React,{useState} from "react"
import Link from "next/link"

import Modal from 'react-bootstrap/Modal';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {LuPlus} from '../assets/icons/vander'

export default function ComposeMail(){
    let [show, setShow] = useState(false);
    return(
        <>
        <Link href="" className="btn btn-primary" onClick={() =>setShow(!show)}><LuPlus className="me-1"/>Compose</Link>
        <Modal show={show} onHide={() =>setShow(!show)} size="lg" centered>
            <Modal.Header closeButton>
                <h5 className="modal-title" id="exampleModalLabel">Compose</h5>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="To"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Cc"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Bcc"/>
                            </div>
                        </div>

                        <div className="col-12">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Hello,<br/><br/> Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation. <br/><br/>Thank you</p>"
                                />
                            
                        </div>

                        <div className="col-12 mt-4">
                            <button className="btn btn-primary">Send Now</button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        </>
       
    )
}