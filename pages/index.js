/** @format */

import Head from "next/head";
import Image from "next/image";
const bg = "/receipt.jpg";
export default function Home() {
  return (
    <div className='overflow-hidden '>
      <div className=' flex flex-col  w-screen '>
        <div className=' border-b bg-gray-50'>
          <div className='flex flex-wrap p-3   container mx-auto  max-w-6xl  '>
            <div className=' text-2xl font-bold mb-4 '>
              <p className='text-green-500'>e-receipt</p>
            </div>

            <Nav />
          </div>
        </div>
        <div  className=' flex-col md:flex  justify-center  items-center  mx-auto w-full banner   flex-1  relative '>
        
          <div className='    z-40  mr-20 p-3 '>

            <p className=' text-5xl  md:text-7xl  font-medium   rounded  mt-8   text-black inline-block '>
              E-RECEIPT
            </p>
            <p className=' text-3xl  font-medium   rounded  block mt-2    text-green-800  '> TO YOUR PHONE</p>
            <div className='mt-2'>
              <div className='  flex space-x-3    p-4  sm:text-lg   mt-3  rounded   '>
               <p className='text-gray-700 text-xl italic'>A plug and play solution that sends receipt to your clients phone</p>
              </div>
         
            </div>
          </div>
          <Image className='block border rounded border-green-300' src='/banner.png' height={600} width={600} alt='th' />

        </div>
      </div>

      <AboutUs />
      <EReceipt />
      <div className='md:flex py-16 px-3 md:px-0   mx-auto bg-gray-100 justify-evenly' >
        <h2 className='text-4xl font-bold italic  mb-4 md:mb-0 '>Contact Us</h2>
        <div >
          <ContactUs />
          <VendorSellerReg />
        </div>
       
      </div>
     
    </div>
  );
}

const Nav = () => {
  return (
    <div className='flex flex-col space-y-2 sm:space-y-0    sm:flex-row flex-wrap justify-between w-full  text-gray-700 text-sm sm:space-x-2'>
      <div>
        <p className='font-bold mb-3  text-gray-700'>HOME</p>
        <div className='space-y-1 text-gray-700'>
          <p>ABOUT US</p>
          <p>OUR OBJECTIVE</p>
          <p>VISION</p>
          <p>MISSION</p>
          <p>WHY REGISTER WITH US</p>
        </div>
      </div>
      <div>
        <p className='font-bold mb-3  text-gray-700'>E-RECEIPT</p>
        <p>ITEMS RANGING 1 - 10</p>
      </div>
      <div>
        <p className='font-bold text-gray-700'>OUR PARTNERS</p>
      </div>
      <div>
        <p className='font-bold text-gray-700'>JOBS@RECEIPTSOLUTIONS</p>
      </div>
      <div>
        <p className='font-bold text-gray-700'>CONTACT US</p>
      </div>
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////
//About us
const AboutUs = () => {
  return (
    <div className='md:flex  justify-around py-16 ' >
      <h2 className='text-4xl font-bold italic mb-4 md:mb-0'>Get to know us</h2>
    <section className='max-w-6xl  px-3 sm:p-0 '>
      <div className='max-w-2xl  tracking-wide w-full   mx-auto '>
        <div className='mb-8'>
          <h2 className='text-2xl tracking-normal mb-1'>About us</h2>
          <p className='text-base text-gray-700   '>
            We are a brand leading Africa to E-receipts we provide you with an
            instant E-receipt for any purchase with all vendors’ country wide.
          </p>
        </div>
        <div className='mb-8 mt-5'>
          <h2 className='text-2xl tracking-normal mb-1 '>Our Objective</h2>
          <p className='text-base text-gray-700   '>
            Saving trees is our number one priority, did you know that over 3
            million trees are cut down worldwide to generate receipts which most
            people (probably even you recently) throw away.
          </p>
        </div>
        <div className='mb-8 mt-5'>
          <h2 className='text-2xl tracking-normal mb-1'>Vision</h2>
          <p className='text-base text-gray-700   '>
            To contribute towards reduction of deforestation in Kenya/Africa by
            at least 40% by providing you our user with (vendor/buyer) with the
            option of an E-Receipt.
          </p>
        </div>
        <div className='mb-8 mt-5'>
          <h2 className='text-2xl mb-1 '>Mission</h2>
          <p className='text-base text-gray-700   '>
            To turn on all resources essential to ensure that both vendor/buyer
            become part of a growing community of environmental friendly, fast
            ,easily retrievable Receipt and innovation on technology kind of
            Business.
          </p>
        </div>
      </div>
      </section>
      </div>
  );
};

//////////////////////////////////////////////////////////////////////////
//why E-receipt
const EReceipt = () => {
  return (
    <div className='md:flex   justify-around py-16 ' >
     <h2 className='text-4xl font-bold italic mb-4 md:mb-0 '>Why E-receipt</h2>
    <section className=' max-w-6xl  px-3 sm:p-0 tracking-wide '>
      <div className='max-w-2xl mx-auto'>
      <div className='mb-8'>
        <h2 className='text-2xl   mb-1'>1. Save Trees</h2>
        <p className='text-lg text-gray-600  '>
          We welcome you to walk with us on this journey to preserve the
          environment (by reducing the number of trees cut down) for the future
          generation.
        </p>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl mb-1'>2. Fast</h2>
        <p className='text-lg text-gray-600  '>
          You get your e-receipt at the speed of light. This will help reduces
          ques at supermarkets or your preferred local vendor.
        </p>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl mb-1'>3. Build on Buyer –Vendor Trust.</h2>
        <p className='text-lg text-gray-600  '>
          A Buyer will now be able to send someone to their preferred vendor
          without worries of being conned as he/she will receive an e-receipt to
          their phone.
        </p>
        </div>
        </div>
      </section>
      </div>
  );
};

/////////////////////////////////////////////////////////////////////////////////
// Contact Us Page




const ContactUs = () => {
  return (
    <section className='sm:p-0'>
      <div className='max-w-2xl mx-auto'>
        <p className='text-base text-gray-600 mt-8 underline'>Buyer/Consumer Registration</p>
      <form className='max-w-sm '>
        <div className=' my-3'>
          <label className='mb-1 text-sm'>Your Name</label>
          <input className='block border rounded p-2  w-full  ' />
        </div>
        <div className=' my-3'>
          <label className='mb-1 text-sm'>Email</label>
          <input className='block border rounded p-2  w-full'  />
        </div>
        <div className='my-3'>
          <label className='mb-1 text-sm'>Phone no.</label>
          <input className='block border rounded p-2  w-full' />
        </div>
        <div className='my-3'>
          <label className='mb-1 text-sm'>
            Most frequent vendor you buy from their location and contact
          </label>
          <input className='block border rounded p-2 w-full '  />
        </div>
        <div className='my-3'>
          <label className='mb-1 text-sm'>Suggestions</label>
          <textarea className=' h-32 w-full block border rounded'>

          </textarea>
        </div>
        </form>
        </div>
    </section>
  );
};

///////////////////////////////////////////////////////////////////////////////
const VendorSellerReg = () => {
  return (
    <section className='sm:p-0'>
      <div className='max-w-2xl mx-auto'>
      <h2 className='text-base text-gray-600  mt-8 underline'>Vendor/Seller Registration</h2>
      <form>
      <div className='max-w-sm'>
        <div className=' my-3'>
          <label className='mb-1 text-sm'>Your Business Name</label>
          <input className='block border rounded p-2  w-full' />
        </div>
        <div className=' my-3'>
          <label className='mb-1 text-sm'>Contact Person Name</label>
          <input className='block border rounded p-2  w-full' />
        </div>
        <div>
          <div className=' my-3'>
            <label className='mb-1 text-sm'>Business Email 1</label>
            <input className='block border rounded p-2  w-full' />
          </div>
          <div className=' my-3'>
            <label className='mb-1 text-sm'>Business Email 2</label>
            <input  className='block border rounded p-2  w-full' />
          </div>
        </div>
        <div className=' my-3'>
          <label className='mb-1 text-sm'>Business KRA PIN</label>
          <input className='block border rounded p-2  w-full' />
        </div>
        </div>
      </form>
        </div>
    </section>
  );
};
