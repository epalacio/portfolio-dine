import logo from '../img/logo.svg'

const Footer = () => {
    return ( 
        <section className='flex flex-col md:flex-row items-center justify-between text-white bg-codGrey p-12'>
            <img src={logo} alt="Dine logo" className='mb-12 md:mb-24' />
            <div className='flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between text-center md:text-left'>
                <div>
                    <p>MARTHWAITE, SEDBERGH</p>
                    <p className='py-2'>CUMBRIA</p>
                    <p>+00 44 123 4567</p>
                </div>
                <div className='lg:ml-24 mt-6 lg:mt-0'>
                    <p>OPEN TIMES</p>
                    <p className='py-2'>MON - FRI: 09:00 AM - 10:00 PM</p>
                    <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                </div>
            </div>
        </section>
     );
}
 
export default Footer;