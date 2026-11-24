'use client'
import React from "react"
import SimpleBar from "simplebar-react";

export default function ScrollBar(props){
    return(
        <SimpleBar style={props.style} className={props.className}>
            {props.children}
        </SimpleBar>
    )
}