import React from 'react'
import Link from "next/link"
import Image from 'next/image';

import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from '../assets/icons/vander'

import CountDown from '../components/countDown';

export default function Maintenance(){

    return(
        <section className="position-relative" style={{backgroundImage:`Url('/images/bg/05.jpg')`}}>
            <div className="bg-overlay bg-black" style={{opacity: '0.7'}}></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 px-md-5 py-5 px-4">
                            <div className="mt-md-5">
                                <Link href="/"><Image src='/images/logo-light.png' width={115} height={24} alt=""/></Link>
                            </div>
                            <div className="title-heading my-auto">
                                <h4 className="maintenance display-5 text-white title-dark fw-bold mb-4">System is under maintenance</h4>
                                <p className="text-white-50 para-desc mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <CountDown/>            
                            </div>
                            <div className="mb-md-5">
                                <span className="text-white-50 h6">Follow Now</span>
                                <ul className="list-unstyled social-icon social mb-0 mt-2">
                                    <li className="list-inline-item"><Link href="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link href="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link href="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="list-inline-item"><Link href="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}