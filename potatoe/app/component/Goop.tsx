import Image from 'next/image'
import PotatoeCream from '../../public/assets/pexels-joaquin-egea-88924.jpg'


function goop() {
  return (
    <div className='w-screen h-96 bg-amber-50 relative -z-40'>
      <div className='absolute -right-0'>
        <Image 
          src={PotatoeCream}
          width={600}
          alt=''
        />
      </div>
      <h1 className='text-7xl relative text-black z-10'>TTESGSADJKLGJSKL</h1>
    </div>
  )
}

export default goop