'use client'
import React,{useState} from "react"
import Link from "next/link"

import { faqData } from "../data/data"

export default function Accordian(){
    let [ activeIndex, setActiveIndex ] = useState(1)

    return(
        <div className="accordion mt-4" id="accordionExample">
            {faqData.slice(0,4).map((item,index) =>{
                return(
                    <div className="accordion-item border rounded mt-2" key={index}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-light`} onClick={() =>setActiveIndex(item.id)}>
                            {item.title}
                            </button>
                        </h2>
                        <div id="collapseTwo" className={`${activeIndex === item.id ? 'show' : ''} accordion-collapse border-0 collapse`}>
                            <div className="accordion-body text-muted">
                                {item.desc}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}