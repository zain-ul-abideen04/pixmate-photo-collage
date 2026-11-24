import React from "react";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../components/wrapper";
import AddBlog from "../components/addBlog";

import {blogData} from '../data/data'

import { FiCalendar, FiClock} from '../assets/icons/vander'

export default function Blogs(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">Blogs</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-1">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Blogs</li>
                                </ul>
                            </nav>
                        </div>
                        <AddBlog/>
                    </div>
                    
                    <div className="row">
                        {blogData.map((item,index) =>{
                            return(
                                <div className="col-xl-3 col-lg-4 col-md-6 col-12 mt-4" key={index}>
                                    <div className="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                        <div className="card-body p-4">
                                            <ul className="list-unstyled mb-2">
                                                <li className="list-inline-item text-muted small me-3 d-inline-flex align-items-lg-center"><FiCalendar className="text-dark h6 me-1 mb-0"/>{item.date}</li>
                                                <li className="list-inline-item text-muted small d-inline-flex align-items-lg-center"><FiClock className="text-dark h6 me-1 mb-0"/>{item.time}</li>
                                            </ul>
                                            <Link href={`/blog-detail/${item.id}`} className="text-dark title h5">{item.title}</Link>
                                            <div className="post-meta d-flex justify-content-between mt-3">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="list-inline-item me-2 mb-0"><Link href="#" className="text-muted like"><i className="mdi mdi-heart-outline me-1"></i>{item.like}</Link></li>
                                                    <li className="list-inline-item"><Link href="#" className="text-muted comments"><i className="mdi mdi-comment-outline me-1"></i>{item.comment}</Link></li>
                                                </ul>
                                                <Link href={`/blog-detail/${item.id}`} className="link">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
    
                    <div className="row">
                        <div className="col-12 mt-4">
                            <ul className="pagination justify-content-end mb-0 list-unstyled">
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
        </Wrapper>
    )
}