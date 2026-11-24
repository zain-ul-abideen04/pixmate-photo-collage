import React from "react";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "../components/wrapper";
import AddProduct from "../components/addProduct";
import Counter from "../components/counter";

import { productData, categories } from '../data/data'

import { FiHeart, FiEye, FiShoppingCart, } from '../assets/icons/vander'

export default function Shop(){
    return(
        <Wrapper>
            <div className="container-fluid">
                <div className="layout-specing">
                    <div className="d-md-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">Shop</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-1">
                                <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                                    <li className="breadcrumb-item"><Link href="/">Doctris</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                </ul>
                            </nav>
                        </div>

                        <AddProduct/>
                    </div>

                    <h6 className="mt-4 mb-0">Most Viewed Products</h6>
                    
                    <div className="row row-cols-md-2 row-cols-lg-5">
                        {productData.slice(0,10).map((item, index) =>{
                            return(
                            <div className="col mt-4" key={index}>
                                <div className="card shop-list border-0 overflow-hidden rounded shadow">
                                    <ul className="label list-unstyled mb-0">
                                        <li><Link href="#" className="badge rounded-pill badge-success">Featured</Link></li>
                                    </ul>
                                    <div className="shop-image position-relative overflow-hidden">
                                        <Link href={`/product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                                        <ul className="list-unstyled shop-icons">
                                            <li><Link href="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-2"><Link href={`/product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                            <li className="mt-2"><Link href="/shopcart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                        </ul>                                
                                        <Counter/>
                                    </div>
                                    <div className="card-body content p-4 border-top">
                                        <Link href={`/product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                        <div className="d-flex justify-content-between mt-1">
                                            <h6 className="text-muted small font-italic mb-0 mt-1">{item.price} </h6>
                                            <ul className="list-unstyled text-warning mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                    <h6 className="mt-4 mb-0">Categories</h6>

                    <div className="row row-cols-md-2 row-cols-lg-5">
                        {categories.map((item, index) =>{
                            return(
                            <div className="col mt-4 pt-2" key={index}>
                                <Link href="#" className="card pharpachy-categories border-0 rounded overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                    <div className="category-title">
                                        <span className="text-dark title-white"><span className="h5">{item.title1}</span><br/>{item.title2}</span>
                                    </div>
                                </Link>
                            </div>
                            )
                        })}
                    </div>

                    <h6 className="mt-4 mb-0">Popular Products</h6>

                    <div className="row row-cols-md-2 row-cols-lg-5">                            
                        {productData.slice(10,15).map((item, index) =>{
                            return(
                            <div className="col mt-4" key={index}>
                                <div className="card shop-list border-0 overflow-hidden rounded shadow">
                                    <ul className="label list-unstyled mb-0">
                                        <li><Link href="#" className="badge rounded-pill badge-success">Featured</Link></li>
                                    </ul>
                                    <div className="shop-image position-relative overflow-hidden">
                                        <Link href={`/product-detail/${item.id}`}><Image src={item.image} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/></Link>
                                        <ul className="list-unstyled shop-icons">
                                            <li><Link href="#" className="btn btn-icon btn-pills btn-soft-danger"><FiHeart className="icons"/></Link></li>
                                            <li className="mt-2"><Link href={`/product-detail/${item.id}`} className="btn btn-icon btn-pills btn-soft-primary"><FiEye className="icons"/></Link></li>
                                            <li className="mt-2"><Link href="/shopcart" className="btn btn-icon btn-pills btn-soft-warning"><FiShoppingCart className="icons"/></Link></li>
                                        </ul>                                
                                        <Counter/>
                                    </div>
                                    <div className="card-body content p-4 border-top">
                                        <Link href={`/product-detail/${item.id}`} className="text-dark product-name h6">{item.name}</Link>
                                        <div className="d-flex justify-content-between mt-1">
                                            <h6 className="text-muted small font-italic mb-0 mt-1">{item.price} </h6>
                                            <ul className="list-unstyled text-warning mb-0">
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}