'use client'
import React from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr:false})
import 'tiny-slider/dist/tiny-slider.css';


export default function ProductSlider(){
    let settings2 ={
        container: '.client-review-slider',
        items: 1,
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 16,
      }
      let productImg = [ '/images/pharmacy/shop/01.jpg', '/images/pharmacy/shop/02.jpg', '/images/pharmacy/shop/03.jpg', '/images/pharmacy/shop/04.jpg' ]
    return(
        <div className="client-review-slider">
            <TinySlider settings={settings2}>
                {productImg.map((item, index) =>{
                    return(
                        <div className="tiny-slide" key={index}><Image src={item} width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></div>
                    )
                })}
            </TinySlider>
        </div>
    )
}