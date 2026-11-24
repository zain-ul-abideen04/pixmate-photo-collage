import React from "react";
import Link from "next/link";

import Wrapper from "../../components/wrapper";
import CounterTwo from "../../components/productDetail/counterTwo";
import FeaturedProduct from "../../components/productDetail/freaturedProduct";

import { productData } from "../../data/data";
import Image from "next/image";

export default function ProductDetail(props){
    let id = props.params.id
    let data = productData.find((product) => product.id === parseInt(id))
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <h5 className="mb-0">{data?.name}</h5>

                        <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                            <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                            </ul>
                        </nav>
                    </div>
                    
                    <div className="card border-0 rounded shadow p-4 mt-4">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5">
                                <div><Image src={data?.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} alt="" className="img-fluid"/></div>
                            </div>
        
                            <div className="col-lg-8 col-md-7 mt-4 mt-sm-0">
                                <div className="ms-md-4">
                                    <h4 className="title">{data?.name}</h4>
                                    <h5 className="text-muted">$21.00 </h5>
                                    <ul className="list-unstyled text-warning h5 mb-0">
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                        <li className="list-inline-item me-2 h6 text-muted">(20 Ratting)</li>
                                    </ul>
                                    
                                    <h5 className="mt-4 py-2">Overview :</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                                
                                    <div className="d-flex shop-list align-items-center">
                                        <h6 className="mb-0">Qty:</h6>
                                        <CounterTwo/>
                                    </div>
        
                                    <div className="mt-4 pt-2">
                                        <Link href="#" className="btn btn-primary">Shop Now</Link>
                                        <Link href="#" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12">
                            <h5 className="mb-0">Related Products:</h5>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-lg-12 mt-4">
                           <FeaturedProduct/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
