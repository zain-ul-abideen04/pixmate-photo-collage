'use client'
import React,{useState, useEffect} from "react"
import Link from "next/link"

import { LuUser2, FiSettings, FiTrash } from '../assets/icons/vander'
import {FaEllipsis} from 'react-icons/fa6'

export default function ChatSetting(){
    let [search, setSearch] = useState(false)
    let [profileSetting, setProfileSetting] = useState(false)

    useEffect(() =>{
        let closeSearch = () =>{
            setSearch(false)
        }
        let closeProfile = () =>{
            setProfileSetting(false)
        }
        document.addEventListener('mousedown', closeSearch)
        document.addEventListener('mousedown', closeProfile)
        return()=>{
            document.removeEventListener('mousedown', closeSearch)
            document.removeEventListener('mousedown', closeProfile)
        }
    },[])

    return(
        <ul className="list-unstyled mb-0">
            <li className="dropdown dropdown-primary list-inline-item">
                <button type="button" className="btn btn-icon btn-pills btn-primary dropdown-toggle p-0" onClick={() =>setSearch(!search)}><i className="mdi mdi-magnify"></i></button>
                <div className={`${search ? 'show' :''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0`} style={{width:'200px', right:'0'}}>
                    <form>
                        <input type="text" id="text" name="name" className="form-control border" placeholder="Search..."/>
                    </form>
                </div>
            </li>
            <li className="dropdown dropdown-primary list-inline-item">
                <button type="button" className="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" onClick={() =>setProfileSetting(!profileSetting)}><FaEllipsis /></button>
                <div className={`${profileSetting ? 'show' : ''} dropdown-menu dd-menu dropdown-menu-end shadow border-0 mt-3 py-3`} style={{right:'0'}}>
                    <Link className="dropdown-item text-dark d-flex align-items-center" href="#"><span className="mb-0 d-inline-block me-1"><LuUser2 className="align-middle h6"/></span> Profile</Link>
                    <Link className="dropdown-item text-dark d-flex align-items-center" href="#"><span className="mb-0 d-inline-block me-1"><FiSettings className="align-middle h6"/></span> Profile Settings</Link>
                    <Link className="dropdown-item text-dark d-flex align-items-center" href="#"><span className="mb-0 d-inline-block me-1"><FiTrash className="align-middle h6"/></span> Delete</Link>
                </div>
            </li>
        </ul>
    )
}