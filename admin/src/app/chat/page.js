import React from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "../components/wrapper";
import ScrollBar from "../components/scrollBar";
import ChatSetting from "../components/chatSetting";

import {chatData} from '../data/data'

import {RiTimeLine, AiOutlineSend, FiSmile, FiPaperclip,} from '../assets/icons/vander'

export default function Chat(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">Chatbox</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link href="#">Apps</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Chat</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-3 col-lg-5 col-md-5 col-12 mt-4">
                            <div className="card border-0 rounded shadow">
                                <div className="text-center p-4 border-bottom">
                                    <Image src='/images/doctors/01.jpg' width={80} height={80} className="avatar avatar-md-md rounded-pill shadow" alt=""/>
                                    <h5 className="mt-3 mb-1">Dr. Calvin Carlo</h5>
                                    <p className="text-muted mb-0">Orthopedic</p>
                                </div>

                                <ScrollBar className="p-2 chat chat-list" style={{maxHeight:'505px'}}>
                                    {chatData.map((item, index) =>{
                                        return(
                                            <Link href="#" className={`${item.bg === true ? 'active' : ''} d-flex chat-list p-2 rounded position-relative`} key={index}>
                                                <div className="position-relative">
                                                    <img src={item.image} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                    {item.status === 'active' ? 
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>:
                                                        <i className="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                    }
                                                </div>
                                                <div className="overflow-hidden flex-1 ms-2">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="text-dark mb-0 d-block">{item.name}</h6>
                                                        <small className="text-muted">{item.time}</small>
                                                    </div>
                                                    {item.badge === true ? 
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-dark h6 mb-0 text-truncate">{item.message}</div>
                                                            <span className="badge rounded-pill bg-soft-danger">{item.badgeNo}</span>
                                                        </div> :
                                                        <div className="text-muted text-truncate">{item.message}</div>
                                                    }
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </ScrollBar>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-7 col-md-7 col-12 mt-4">
                            <div className="card chat chat-person border-0 shadow rounded">
                                <div className="d-flex justify-content-between border-bottom p-4">
                                    <div className="d-flex">
                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                        <div className="overflow-hidden ms-3">
                                            <Link href="#" className="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                                            <small className="text-muted"><i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                                        </div>
                                    </div>

                                    <ChatSetting/>
                                </div>
                                <ScrollBar style={{maxHeight:"555px"}}>
                                    <ul className="p-4 list-unstyled mb-0 chat" style={{backgroundImage:`url('/images/bg/bg-chat.png')` , backgroundPosition:'center'}}>
                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>59 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>44 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>42 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>40 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>45 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>35 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link href="https://1.envato.market/doctris-template" target="_blank" className="text-primary">https://shreethemes.in/Doctris/</Link></p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>25 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative">
                                                        <Image src='/images/doctors/02.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>20 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="chat-right">
                                            <div className="d-inline-block">
                                                <div className="d-flex chat-type mb-3">
                                                    <div className="position-relative chat-user-image">
                                                        <Image src='/images/doctors/01.jpg' width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                                        <i className="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                    </div>
                                                        
                                                    <div className="chat-msg" style={{maxWidth:'500px'}}>
                                                        <p className="text-muted small shadow px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                                        <small className="text-muted msg-time"><RiTimeLine className="me-1 mb-0"/>18 min ago</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </ScrollBar>

                                <div className="p-2 rounded-bottom shadow">
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control border" placeholder="Enter Message..."/>
                                        </div>
                                        <div className="col-auto">
                                            <Link href="#" className="btn btn-icon btn-primary"><AiOutlineSend /></Link>
                                            <Link href="#" className="btn btn-icon btn-primary mx-1"><FiSmile /></Link>
                                            <Link href="#" className="btn btn-icon btn-primary"><FiPaperclip /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}