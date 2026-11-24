import {FaBed, LiaFileMedicalAltSolid, TbUsersGroup, TbAmbulance, LiaMedkitSolid, GiMedicalDrip, RiHeartPulseLine, RiStethoscopeLine, RiVirusLine, RiDossierLine, RiEyeLine, RiMicroscopeLine } from '../assets/icons/vander'

export const countryData = [
    {
        image: '/images/language/chinese.png',
        name: 'Chinese'
    },
    {
        image: '/images/language/european.png',
        name: 'European'
    },
    {
        image: '/images/language/indian.png',
        name: 'Indian'
    },
    {
        image: '/images/language/japanese.png',
        name: 'Japanese'
    },
    {
        image: '/images/language/russian.png',
        name: 'Russian'
    },
]

export const mailData =[
    {
        image:'/images/client/01.jpg',
        desc: 'You received a new email from',
        desc2: 'Janalia',
        time: '1 hour ago'
    },
    {
        image:'/images/client/dribbble.svg',
        desc: 'You received a new email from',
        desc2: 'codepen',
        time: '4 hour ago'
    },
    {
        image:'/images/client/02.jpg',
        desc: 'You received a new email from',
        desc2: 'Cristina',
        time: '5 hour ago'
    },
    {
        image:'/images/client/dribbble.svg',
        desc: 'You received a new email from',
        desc2: 'Dribbble',
        time: '24 hour ago'
    },
    {
        image:'/images/client/03.jpg',
        desc: 'You received a new email from',
        desc2: 'Donald Aghori',
        time: '1 day ago'
    },
    {
        image:'/images/client/04.jpg',
        desc: 'You received a new email from',
        desc2: 'Calvin',
        time: '2 day ago'
    },
]

export const aboutData = [
    {
        icon : FaBed,
        title:'558',
        desc:'Patients' 
    },
    {
        icon : LiaFileMedicalAltSolid,
        title:'$2164',
        desc:'Avg. costs' 
    },
    {
        icon : TbUsersGroup,
        title:'112',
        desc:'Staff Members' 
    },
    {
        icon : TbAmbulance,
        title:'16',
        desc:'Vehicles' 
    },
    {
        icon : LiaMedkitSolid,
        title:'220',
        desc:'Appointment' 
    },
    {
        icon : GiMedicalDrip,
        title:'10',
        desc:'Operations' 
    },
]
export const latestAppointment = [
    {
        image:'/images/client/01.jpg',
        name:'Calvin Carlo',
        date:'Booking on 13th Sep, 2023'
    },
    {
        image:'/images/client/02.jpg',
        name:'Calvin Carlo',
        date:'Booking on 29th Nov, 2023'
    },
    {
        image:'/images/client/03.jpg',
        name:'Calvin Carlo',
        date:'Booking on 29th Dec, 2023'
    },
    {
        image:'/images/client/04.jpg',
        name:'Calvin Carlo',
        date:'Booking on 13th March, 2023'
    },
    {
        image:'/images/client/05.jpg',
        name:'Calvin Carlo',
        date:'Booking on 5th May, 2023'
    },
]
export const patientsReviews = [
    {
        image: '/images/doctors/01.jpg',
        name: 'Dr. Calvin Carlo',
        speciality: 'Orthopedic',
        rate:'45',
        patients:'150'
    },
    {
        image: '/images/doctors/02.jpg',
        name: 'Dr. Cristino Murphy',
        speciality: 'Gynecology',
        rate:'75',
        patients:'350'
    },
    {
        image: '/images/doctors/03.jpg',
        name: 'Dr. Alia Reddy',
        speciality: 'Psychotherapy',
        rate:'48',
        patients:'450'
    },
    {
        image: '/images/doctors/04.jpg',
        name: 'Dr. Toni Kover',
        speciality: 'Dentist',
        rate:'68',
        patients:'484'
    },
    {
        image: '/images/doctors/05.jpg',
        name: 'Dr. Jennifer Ballance',
        speciality: 'Cardiology',
        rate:'55',
        patients:'476'
    },
]
export const appointmentData = [
    {
        id:1,
        client:'/images/client/01.jpg',
        clientName :'Howard Tanner',
        email:'howard@contact.com',
        age:'25',
        gender: 'Male',
        department:'Cardiology',
        date:'13th Sep 2023',
        time:'11:00AM',
        doctor: '/images/doctors/01.jpg',
        doctorName:'Dr. Calvin Carlo',
        fees:'$50/Patient'
    },
    {
        id:2,
        client:'/images/client/02.jpg',
        clientName :'Wendy Filson',
        email:'wendy@contact.com',
        age:'28',
        gender: 'Female',
        department:'Gynecology',
        date:'29th Nov 2023',
        time:'11:00AM',
        doctor: '/images/doctors/02.jpg',
        doctorName:'Dr. Cristino Murphy',
        fees:'$50/Patient'
    },
    {
        id:3,
        client:'/images/client/03.jpg',
        clientName :'Faye Bridger',
        email:'faye@contact.com',
        age:'28',
        gender: 'Female',
        department:'Psychotherapy',
        date:'29th Dec 2023',
        time:'02:00PM',
        doctor: '/images/doctors/03.jpg',
        doctorName:'Dr. Alia Reddy',
        fees:'$50/Patient'
    },
    {
        id:4,
        client:'/images/client/04.jpg',
        clientName :'Ronald Curtis',
        email:'ronald@contact.com',
        age:'25',
        gender: 'Male',
        department:'Orthopedic',
        date:'13th March 2023',
        time:'01:00PM',
        doctor: '/images/doctors/04.jpg',
        doctorName:'Toni Kovar',
        fees:'$50/Patient'
    },
    {
        id:5,
        client:'/images/client/05.jpg',
        clientName :'Melissa Hibner',
        email:'melissa@contact.com',
        age:'28',
        gender: 'Female',
        department:'Dental',
        date:'5th May 2023',
        time:'10:00AM',
        doctor: '/images/doctors/05.jpg',
        doctorName:'Dr. Jessica McFarlane',
        fees:'$50/Patient'
    },
    {
        id:6,
        client:'/images/client/06.jpg',
        clientName :'Randall Case',
        email:'randall@contact.com',
        age:'25',
        gender: 'Male',
        department:'Orthopedic',
        date:'19th June 2023',
        time:'09:00AM',
        doctor: '/images/doctors/06.jpg',
        doctorName:'Dr. Toni Kovar',
        fees:'$50/Patient'
    },
    {
        id:7,
        client:'/images/client/07.jpg',
        clientName :'Jerry Morena',
        email:'jerry@contact.com',
        age:'25',
        gender: 'Male',
        department:'Dentist',
        date:'20th June 2023',
        time:'01:00PM',
        doctor: '/images/doctors/07.jpg',
        doctorName:'Dr. Jessica McFarlane',
        fees:'$50/Patient'
    },
    {
        id:8,
        client:'/images/client/08.jpg',
        clientName :'Lester McNally',
        email:'jessica@contact.com',
        age:'25',
        gender: 'Male',
        department:'Gastrology',
        date:'31st Aug 2023',
        time:'01:00AM',
        doctor: '/images/doctors/08.jpg',
        doctorName:'Dr. Elsie Sherman',
        fees:'$50/Patient'
    },
    {
        id:9,
        client:'/images/client/09.jpg',
        clientName :'Christopher Burrell',
        email:'christopher@contact.com',
        age:'28',
        gender: 'Female',
        department:'Urology',
        date:'1st Sep 2023',
        time:'01:00PM',
        doctor: '/images/doctors/09.jpg',
        doctorName:'Dr. Bertha Magers',
        fees:'$50/Patient'
    },
    {
        id:10,
        client:'/images/client/10.jpg',
        clientName :'Mary Skeens',
        email:'mary@contact.com',
        age:'28',
        gender: 'Female',
        department:'Neurology',
        date:'20th Dec 2020',
        time:'11:00AM',
        doctor: '/images/doctors/10.jpg',
        doctorName:'Dr. Louis Batey',
        fees:'$50/Patient'
    },
]
export const doctorData = [
    {
        id:1,
        image:'/images/doctors/01.jpg',
        name:'Dr. Calvin Carlo',
        title:'Eye Care',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:2,
        image:'/images/doctors/02.jpg',
        name:'Dr. Cristino Murphy',
        title:'Gynecology',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '5 Years Experienced'
    },
    {
        id:3,
        image:'/images/doctors/03.jpg',
        name:'Dr. Alia Reddy',
        title:'Psychotherapy',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '4 Years Experienced'
    },
    {
        id:4,
        image:'/images/doctors/04.jpg',
        name:'Dr. Toni Kovar',
        title:'Orthopedic',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '6 Years Experienced'
    },
    {
        id:5,
        image:'/images/doctors/05.jpg',
        name:'Dr. Jessica McFarlane',
        title:'Dentist',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:6,
        image:'/images/doctors/06.jpg',
        name:'Dr. Elsie Sherman',
        title:'Gastrologist',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:7,
        image:'/images/doctors/07.jpg',
        name:'Dr. Bertha Magers',
        title:'Urologist',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:8,
        image:'/images/doctors/08.jpg',
        name:'Dr. Louis Batey',
        title:'Neurologist',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:9,
        image:'/images/doctors/09.jpg',
        name:'Dr. Julie Rosario',
        title:'Psychotherapy',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
    {
        id:10,
        image:'/images/doctors/10.jpg',
        name:'Dr. Scott Guzman',
        title:'Nutritionists',
        location:'63, PG Shustoke, UK',
        time:'Mon: 2:00PM - 6:00PM',
        fees:'$ 75 USD / Visit',
        exp: '3 Years Experienced'
    },
]
export const experienceData = [
    {
        year:'2010 - 2014',
        name:'Master Of Science',
        place:'X.Y.Z Hospital (NZ)'
    },
    {
        year:'2014 - 2016',
        name:'Gynecology Test',
        place:'X.Y.Z Hospital (NZ)'
    },
    {
        year:'2016 - 2019',
        name:'Master Of Medicine',
        place:'X.Y.Z Hospital (NZ)'
    },
    {
        year:'2019 - 2020',
        name:'Orthopedics',
        place:'X.Y.Z Hospital (NZ)'
    },
    {
        year:'2020 to continue..',
        name:'Gynecologist (Final)',
        place:'X.Y.Z Hospital (NZ)'
    },

]
export const clientReview = [
    {
        image:'/images/client/01.jpg',
        name:'- Thomas Israel',
        title:'C.E.O',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    {
        image:'/images/client/02.jpg',
        name:'- Carl Oliver',
        title:'P.A',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    {
        image:'/images/client/03.jpg',
        name:'- Barbara McIntosh',
        title:'M.D',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    {
        image:'/images/client/04.jpg',
        name:'- Christa Smith',
        title:'Manager',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    {
        image:'/images/client/05.jpg',
        name:'- Dean Tolle',
        title:'Developer',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    {
        image:'/images/client/06.jpg',
        name:'- Jill Webb',
        title:'Designer',
        desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
    },
    
]
export const companyLogo = [
    '/images/client/amazon.png', '/images/client/google.png', '/images/client/lenovo.png', '/images/client/paypal.png', '/images/client/shopify.png', '/images/client/spotify.png' 
]
export const drTimetable = [
    {
        day:'Monday',
        time:' 8.00 - 20.00'
    },
    {
        day:'Tuesday',
        time:' 8.00 - 20.00'
    },
    {
        day:'Wednesday',
        time:' 8.00 - 20.00'
    },
    {
        day:'Thursday',
        time:' 8.00 - 20.00'
    },
    {
        day:'Friday',
        time:' 8.00 - 20.00'
    },
    {
        day:'Saturday',
        time:' 8.00 - 18.00'
    },
    {
        day:'Sunday',
        time:' 8.00 - 14.00'
    },
]
export const patientData = [
    {
        id:'1',
        image:'/images/client/01.jpg',
        name:'Howard Tanner',
        age:'25',
        gender:'Male',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Cardiology',
        date:'13th Sep 2023',
        time:'11:00AM',
        status:'Approved'
    },
    {
        id:'2',
        image:'/images/client/02.jpg',
        name:'Wendy Filson',
        age:'28',
        gender:'Female',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Gynecology',
        date:'29th Nov 2023',
        time:'11:00AM',
        status:'Pending'
    },
    {
        id:'3',
        image:'/images/client/03.jpg',
        name:'Faye Bridger',
        age:'28',
        gender:'Female',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Psychotherapy',
        date:'29th Dec 2023',
        time:'3:00PM',
        status:'Approved'
    },
    {
        id:'4',
        image:'/images/client/04.jpg',
        name:'Ronald Curtis',
        age:'25',
        gender:'Male',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Orthopedic',
        date:'13th March 2023',
        time:'1:00PM',
        status:'Approved'
    },
    {
        id:'5',
        image:'/images/client/05.jpg',
        name:'Melissa Hibner',
        age:'28',
        gender:'Female',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Dental',
        date:'5th May 2023',
        time:'10:00AM',
        status:'Pending'
    },
    {
        id:'6',
        image:'/images/client/06.jpg',
        name:'Randall Case',
        age:'25',
        gender:'Male',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Orthopedic',
        date:'19th June 2023',
        time:'09:00AM',
        status:'Approved'
    },
    {
        id:'7',
        image:'/images/client/07.jpg',
        name:'Jerry Morena',
        age:'25',
        gender:'Male',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Dentist',
        date:'20th June 2023',
        time:'02:00PM',
        status:'Pending'
    },
    {
        id:'8',
        image:'/images/client/08.jpg',
        name:'Lester McNally',
        age:'25',
        gender:'Male',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Gastrology',
        date:'31st Aug 2023',
        time:'01:30PM',
        status:'Approved'
    },
    {
        id:'9',
        image:'/images/client/09.jpg',
        name:'Christopher Burrell',
        age:'28',
        gender:'Female',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Urology',
        date:'1st Sep 2023',
        time:'2:00PM',
        status:'Approved'
    },
    {
        id:'10',
        image:'/images/client/10.jpg',
        name:'Mary Skeens',
        age:'28',
        gender:'Female',
        address:'1451 - ABC Street, NY',
        mobileNo:'(+452) 8945 4568',
        Department:'Neurology',
        date:'13th Sep 2023',
        time:'11:00AM',
        status:'Pending'
    },
]
export const appointmentList =[
    {
        icon:RiHeartPulseLine,
        title:'Cardiogram',
        name:'Dr. Calvin Carlo',
        date:'13 March',
        iconClass:'h3 fw-normal text-primary mb-0'
    },
    {
        icon:RiStethoscopeLine,
        title:'Checkup',
        name:'Dr. Cristino Murphy',
        date:'5 May',
        iconClass:'h3 fw-normal text-success mb-0'
    },
    {
        icon:RiVirusLine,
        title:'Covid Test',
        name:'Dr. Alia Reddy',
        date:'19 June',
        iconClass:'h3 fw-normal text-warning mb-0'
    },
    {
        icon:RiDossierLine,
        title:'Dentist',
        name:'Dr. Toni Kovar',
        date:'20 June',
        iconClass:'h3 fw-normal text-secondary mb-0'
    },
    {
        icon:RiEyeLine,
        title:'Eye Test',
        name:'Dr. Jessica McFarlane',
        date:'31 Aug',
        iconClass:'h3 fw-normal text-info mb-0'
    },
    {
        icon:RiMicroscopeLine,
        title:'Orthopedic',
        name:'Dr. Elsie Sherman',
        date:'1 Sep',
        iconClass:'h3 fw-normal text-danger mb-0'
    },
]
export const paymentList = [
    {
        name:'Cardiogram',
        title:'Full bill paid'
    },
    {
        name:'Checkup',
        title:'Full bill paid'
    },
    {
        name:'Covid Test',
        title:'Full bill paid'
    },
    {
        name:'Dentist',
        title:'Full bill paid'
    },
    {
        name:'Eye Test',
        title:'Full bill paid'
    },
    {
        name:'Orthopedic',
        title:'Full bill paid'
    },
]
export const chatData = [
    {
        image:'/images/client/09.jpg',
        name:'Christopher',
        time:'10 Min',
        message:'Hello',
        badgeNo:'0',
        badge:false,
        status:'active',
        bg:true
    },
    {
        image:'/images/doctors/02.jpg',
        name:'Dr. Cristino',
        time:'20 Min',
        message:'Hi, How are you?',
        badgeNo:'2',
        badge:true,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/03.jpg',
        name:'Faye',
        time:'30 Min',
        message:'Heyy',
        badgeNo:'0',
        badge:false,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/04.jpg',
        name:'Ronald',
        time:'2 Hours',
        message:'Hey, How are you sir?',
        badgeNo:'0',
        badge:false,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/05.jpg',
        name:'Melissa',
        time:'3 Hours',
        message:'Good Afternoon',
        badgeNo:'0',
        badge:false,
        status:'active',
        bg:false
    },
    {
        image:'/images/doctors/06.jpg',
        name:'Dr. Elsie',
        time:'10 Hours',
        message:'Good Morning sir, how can i help you?',
        badgeNo:'0',
        badge:false,
        status:'active',
        bg:false
    },
    {
        image:'/images/client/07.jpg',
        name:'Jerry',
        time:'16 Hours',
        message:'Please give me appointment',
        badgeNo:'0',
        badge:false,
        status:'active',
        bg:false
    },
    {
        image:'/images/doctors/08.jpg',
        name:'Dr. Louis',
        time:'1 Days',
        message:'Hii',
        badgeNo:'0',
        badge:false,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/06.jpg',
        name:'Randall',
        time:'2 Days',
        message:'Hello Sir',
        badgeNo:'0',
        badge:false,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/10.jpg',
        name:'Mary',
        time:'3 Days',
        message:'How are you sir?',
        badgeNo:'0',
        badge:false,
        status:'deActive',
        bg:false
    },
    {
        image:'/images/client/08.jpg',
        name:'4 Days',
        time:'10 Min',
        message:'Hello please give me answer.',
        badgeNo:'0',
        badge:false,
        status:'active',
        bg:false
    },
]
export const mailList = [
    {
        name:'Amy Lucier',
        desc:'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
        date:'13 Sep 2023'
    },
    {
        name:'Tameika Whittle',
        desc:'The wise man therefore always holds in these matters to this principle of selection.',
        date:'29 Nov 2023'
    },
    {
        name:'Barbara Bayne',
        desc:'We denounce with righteous',
        date:'29 Dec 2023'
    },
    {
        name:'Nita Griffin',
        desc:'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
        date:'13 March 2023'
    },
    {
        name:'Marc Flythe',
        desc:'The wise man therefore always holds in these matters to this principle of selection.',
        date:'5th May 2023'
    },
    {
        name:'Elaine Hannah',
        desc:'pain avoided.',
        date:'19 June 2023'
    },
    {
        name:'Abraham Edwards',
        desc:'We denounce with righteous',
        date:'20 June 2023'
    },
    {
        name:'Allie Smith',
        desc:'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
        date:'31 Aug 2023'
    },
    {
        name:'Eleanor Cisco',
        desc:'The wise man therefore always holds in these matters to this principle of selection.',
        date:'1 Sep 2023'
    },
    {
        name:'Troy Turk',
        desc:'pain avoided.',
        date:'13 Sep 2023'
    },
    {
        name:'Tyron Elliott',
        desc:'We denounce with righteous',
        date:'29 Nov 2023'
    },
    {
        name:'Betty Cook',
        desc:'We denounce with righteous',
        date:'29 Dec 2023'
    },
    {
        name:'Doris Morrison',
        desc:'In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do.',
        date:'13 March 2023'
    },
    {
        name:'Chad Potter',
        desc:'The wise man therefore always holds in these matters to this principle of selection.',
        date:'5 May 2023'
    },
]
export const productData =[
    {
        id:1,
        image:'/images/pharmacy/shop/thermometer.jpg',
        name:'Thermometer',
        price:'$16.00',
    },
    {
        id:2,
        image:'/images/pharmacy/shop/stethoscope.jpg',
        name:'Stethoscope',
        price:'$16.00',
    },
    {
        id:3,
        image:'/images/pharmacy/shop/pulse-oximeter.jpg',
        name:'Pulse oximeter',
        price:'$16.00',
    },
    {
        id:4,
        image:'/images/pharmacy/shop/medicine.jpg',
        name:'Medicine pills',
        price:'$16.00',
    },
    {
        id:5,
        image:'/images/pharmacy/shop/smoking-habit.jpg',
        name:'Smokill smoking habit',
        price:'$16.00',
    },
    {
        id:6,
        image:'/images/pharmacy/shop/sanitizer.jpg',
        name:'Sanitizer',
        price:'$16.00',
    },
    {
        id:7,
        image:'/images/pharmacy/shop/nicotex.jpg',
        name:'Nicotex',
        price:'$16.00',
    },
    {
        id:8,
        image:'/images/pharmacy/shop/medigrip.jpg',
        name:'Medigrip',
        price:'$16.00',
    },
    {
        id:9,
        image:'/images/pharmacy/shop/masks.jpg',
        name:'Face masks',
        price:'$16.00',
    },
    {
        id:10,
        image:'/images/pharmacy/shop/handwash.jpg',
        name:'Dettol handwash',
        price:'$16.00',
    },
    {
        id:11,
        image:'/images/pharmacy/shop/ashwagandha.jpg',
        name:'Ashwagandha churna',
        price:'$16.00',
    },
    {
        id:12,
        image:'/images/pharmacy/shop/beby-products.jpg',
        name:'Beby products',
        price:'$16.00',
    },
    {
        id:13,
        image:'/images/pharmacy/shop/kidney-tray.jpg',
        name:'Kidney tray',
        price:'$16.00',
    },
    {
        id:14,
        image:'/images/pharmacy/shop/herbal-care.jpg',
        name:'Herbal care product',
        price:'$16.00',
    },
    {
        id:15,
        image:'/images/pharmacy/shop/medical-equptment.jpg',
        name:'Medical equptment',
        price:'$16.00',
    },
]
export const categories = [
    {
        image:'/images/pharmacy/skin.jpg',
        title1:'Skin',
        title2:'Care'
    },
    {
        image:'/images/pharmacy/sexual.jpg',
        title1:'Sexual',
        title2:'Wallness'
    },
    {
        image:'/images/pharmacy/weight.jpg',
        title1:'Weight',
        title2:'Management'
    },
    {
        image:'/images/pharmacy/pain.jpg',
        title1:'Pain',
        title2:'Relief'
    },
    {
        image:'/images/pharmacy/heart.jpg',
        title1:'Heart',
        title2:'Health'
    },
    {
        image:'/images/pharmacy/cough.jpg',
        title1:'Cough',
        title2:'& Cold'
    },
    {
        image:'/images/pharmacy/diabetes.jpg',
        title1:'Diabetes',
        title2:'Care'
    },
    {
        image:'/images/pharmacy/cancer.jpg',
        title1:'Cancer',
        title2:'Care'
    },
]
export const cartItems = [
    {
        image:'/images/pharmacy/shop/ashwagandha.jpg',
        name:'Ashwagandha Churna',
        price:'$ 255.00',
        total:'$510.00'
    },
    {
        image:'/images/pharmacy/shop/diabend.jpg',
        name:'Diabend',
        price:'$ 520.00',
        total:'$520.00'
    },
    {
        image:'/images/pharmacy/shop/facewash.jpg',
        name:'Facewash',
        price:'$ 160.00',
        total:'$640.00'
    },
    {
        image:'/images/pharmacy/shop/handwash.jpg',
        name:'Dettol handwash',
        price:'$ 260.00',
        total:'$520.00'
    },
]
export const blogData = [
    {
        id:1,
        image:'/images/blog/01.jpg',
        title:'Easily connect to doctor and make a treatment',
        date:'13th Sep 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:2,
        image:'/images/blog/02.jpg',
        title:'Lockdowns lead to fewer people seeking medical care',
        date:'29th Nov 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:3,
        image:'/images/blog/03.jpg',
        title:'medicine research course for doctors',
        date:'29th Dec 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:4,
        image:'/images/blog/04.jpg',
        title:'Comparing Nitrogen And Mechanical Freezers',
        date:'13th March 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:5,
        image:'/images/blog/05.jpg',
        title:'It Is Very Important To Wear Proper Clothing',
        date:'05th May 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:6,
        image:'/images/blog/06.jpg',
        title:'Hollowed-Out Faces More Cuts Amid Virus',
        date:'19th June 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:7,
        image:'/images/blog/07.jpg',
        title:'A Researcher Is Research On Coronavirus In Lab',
        date:'20th June 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
    {
        id:8,
        image:'/images/blog/08.jpg',
        title:'Using Spectroscopy To Assess Food Quality',
        date:'31st Dec 2023',
        time:'5 min read',
        like:'33',
        comment:'08'
    },
]
export const blogcomment =[
    {
        image:'/images/client/01.jpg',
        name:'Lorenzo Peterson',
        date:'13th March 2023 at 01:00 pm',
        deac:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:'/images/client/02.jpg',
        name:'Tammy Camacho',
        date:'5th May 2023 at 10:00 am',
        deac:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:'/images/client/02.jpg',
        name:'Tammy Camacho',
        date:'19th June 2023 at 09:00 am',
        deac:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
    {
        image:'/images/client/01.jpg',
        name:'Lorenzo Peterson',
        date:'20th June 2023 at 01:30 pm',
        deac:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
    },
]
export const recentBlog = [
    {
        image:'/images/blog/07.jpg',
        title: 'Consultant Business',
        date:'13th Sep 2023',
    },
    {
        image:'/images/blog/08.jpg',
        title: 'Look On The Glorious Balance',
        date:'29th Nov 2023',
    },
    {
        image:'/images/blog/09.jpg',
        title: 'Research Financial.',
        date:'29th Dec 2023',
    },
]
export const faqData = [
    {
        id:1,
        title:'Getting Started With Your Doctris Practice',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:2,
        title:'Managing Your Practice Locations',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:3,
        title:'Setting Up Your Clinic Services',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:4,
        title:'Appointment Calendar Settings',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:5,
        title:'Configuring Tax Rates for services',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:6,
        title:'Setting up the Doctris Practice for Text Consultations',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:7,
        title:'Configuring Tax Rates for services',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:8,
        title:'Setting Up Your Clinic Services',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:9,
        title:'Managing Patient Data in Your Doctris Practice',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:10,
        title:'Choosing Measurement Units for Health Data',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:11,
        title:'Uploading and Accessing Medical Reports',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:12,
        title:'Comprehensive Health Profile',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:13,
        title:'Doctris Practice Overview',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:14,
        title:'Creating Your Own Doctris Practice',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:15,
        title:'Features of the Doctris Practice',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
    {
        id:16,
        title:'Doctris Practice Widget Integrations',
        desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
    },
]
export const reviewData = [
    {
        id:1,
        image:'/images/client/01.jpg',
        name:'Howard Tanner',
        mail:'howard@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'13th Sep 2023',
    },
    {
        id:2,
        image:'/images/client/02.jpg',
        name:'Wendy Filson',
        mail:'wendy@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'29th Nov 2023',
    },
    {
        id:3,
        image:'/images/client/03.jpg',
        name:'Faye Bridger',
        mail:'faye@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'29th Dec 2023',
    },
    {
        id:4,
        image:'/images/client/04.jpg',
        name:'Ronald Curtis',
        mail:'ronald@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'13th March 2023',
    },
    {
        id:5,
        image:'/images/client/05.jpg',
        name:'Melissa Hibner',
        mail:'melissa@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'05th May 2023',
    },
    {
        id:6,
        image:'/images/client/06.jpg',
        name:'Randall Case',
        mail:'randall@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'19th June 2023',
    },
    {
        id:7,
        image:'/images/client/07.jpg',
        name:'Jerry Morena',
        mail:'jerry@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'20th June 2023',
    },
    {
        id:8,
        image:'/images/client/08.jpg',
        name:'Lester McNally',
        mail:'jessica@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'31st Aug 2023',
    },
    {
        id:9,
        image:'/images/client/09.jpg',
        name:'Christopher Burrell',
        mail:'christopher@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'01st Sep 2023',
    },
    {
        id:10,
        image:'/images/client/10.jpg',
        name:'Mary Skeens',
        mail:'mary@contact.com',
        comments:'This is required when, for example, the final text is not yet available..',
        date:'13th Sep 2023',
    },
]
export const invoiceData = [
    {
        id:'#d01',
        image:'/images/client/01.jpg',
        name:'Howard Tanner',
        phone:'(+12)85-4521-7568',
        amount:'$253',
        date:'13th Sep 2023',
        status:'Unpaid'
    },
    {
        id:'#d02',
        image:'/images/client/02.jpg',
        name:'Wendy Filson',
        phone:'(+12)85-4521-7568',
        amount:'$482',
        date:'29th Nov 2023',
        status:'Paid'
    },
    {
        id:'#d03',
        image:'/images/client/03.jpg',
        name:'Faye Bridger',
        phone:'(+12)85-4521-7568',
        amount:'$546',
        date:'29th Dec 2023',
        status:'Unpaid'
    },
    {
        id:'#d04',
        image:'/images/client/04.jpg',
        name:'Ronald Curtis',
        phone:'(+12)85-4521-7568',
        amount:'$154',
        date:'13th Mach 2023',
        status:'Unpaid'
    },
    {
        id:'#d05',
        image:'/images/client/05.jpg',
        name:'Melissa Hibner',
        phone:'(+12)85-4521-7568',
        amount:'$458',
        date:'05th May 2023',
        status:'Paid'
    },
    {
        id:'#d06',
        image:'/images/client/06.jpg',
        name:'Randall Case',
        phone:'(+12)85-4521-7568',
        amount:'$548',
        date:'19th June 2023',
        status:'Paid'
    },
    {
        id:'#d07',
        image:'/images/client/07.jpg',
        name:'Jerry Morena',
        phone:'(+12)85-4521-7568',
        amount:'$658',
        date:'20th June 2023',
        status:'Unpaid'
    },
    {
        id:'#d08',
        image:'/images/client/08.jpg',
        name:'Lester McNally',
        phone:'(+12)85-4521-7568',
        amount:'$457',
        date:'31st Aug 2023',
        status:'Unpaid'
    },
    {
        id:'#d09',
        image:'/images/client/09.jpg',
        name:'Christopher Burrell',
        phone:'(+12)85-4521-7568',
        amount:'$586',
        date:'01st Sep 2023',
        status:'Paid'
    },
    {
        id:'#d10',
        image:'/images/client/10.jpg',
        name:'Mary Skeens',
        phone:'(+12)85-4521-7568',
        amount:'$325',
        date:'13th Sep 2023',
        status:'Unpaid'
    },
]
