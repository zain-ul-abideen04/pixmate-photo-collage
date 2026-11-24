'use client'
import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(() =>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';

import { productData } from "../../data/data"

import { FiHeart, FiEye, FiShoppingCart} from '../../assets/icons/vander'

import Counter from "../counter"

export default function FeaturedProduct(){
    let settings ={
        container: '.slider-range-four',
        items: 4,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 24,
        responsive: {
            992: {
                items: 4
            },

            767: {
                items: 2
            },
            

            320: {
                items: 1
            },
        },
    }
    return(
        <div className="slider-range-four">
        <TinySlider settings={settings}>
            {productData.slice(0,10).map((item, index) =>{
                return(
                <div className="tiny-slide" key={index}>
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
        </TinySlider>
    </div>
    )
}