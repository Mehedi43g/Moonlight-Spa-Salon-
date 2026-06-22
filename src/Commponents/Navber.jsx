import Container from "./Container"

const Navber = () => {
  return (
    <nav className="bg-[#1A1410] shadow">
      <Container>

    <div className="flex py-4 items-center justify-between font-poppins text-white font-">
      {/* <img src="#" alt="logo" className="w-12 h-12"/> */}
      <div className="">
        <h2 className="text-[20px] font-bold">Moonlight Spa & Salon</h2>
      </div>
      <div>
        <div className=" mx-auto  justify-center items-center ">

      <ul className="flex items-center gap-6 font-poppins text-[16px]">
        <li className= "">Home</li>
        <li className= "">Services</li>
        <li className= "">Packages</li>
        <li className= "">About Us</li>
        <li className= "">Gallery</li>
        <li className= "">Blog</li>
        <li className= "">Contact</li>
        <a href="#">
        <li className="bg-[#D4AF37] px-6 cursor-pointer py-2 rounded-2xl">Book Now</li>
        </a>
      </ul>
        </div>
      </div>
    </div>
      </Container>
    </nav>
  )
}

export default Navber