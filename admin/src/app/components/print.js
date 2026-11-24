'use client'

import React from "react"
import Link from "next/link"

import { LuPrinter } from '../assets/icons/vander'

export default function Print({className}){
    return(
        <div className={className}>
            <Link href="#" scroll={false} onClick={() => window.print()} className="btn btn-soft-primary d-print-none"><LuPrinter /> Print</Link>
        </div>
    )
}