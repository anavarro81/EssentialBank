
import Header from '../../components/Header'


const ServicesDetails = () => {
    return (
        <>

            <div className='flex flex-col items-center justify-between min-h-screen '>



                <Header />

                <h2 className='text-3xl'> Agregar pago de servicio </h2>

                <div className='mx-auto w-11/12'>
                    <label className='block mb-2 text-sm font-bold text-gray-700'> Numero de cliente </label>
                    <div className='flex items-center mb-6 border rounded shadow  bg-greyDesign'>

                        <input type='text' className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline'
                            placeholder='Ingresa numero de cliente' />
                    </div>
                </div>
                {/* <div> 
      <label htmlFor=""></label>
      <input type="text" 
      placeholder='Ingresa numero de IBAN'/>
    </div> */}


                <div className='mx-auto w-11/12'>
                    <p>  ¿Deseas guardar como pago frecuente? </p>
                    <label htmlFor="" className='text-primary'> Tipo de pago </label>
                    <input
                        type="text"
                        placeholder='Ingresa el tipo de pago'
                        className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline mb-[16px]'
                    />

                    <label htmlFor="" className='text-primary'> Descripcion </label>

                    <input
                        type="text"
                        placeholder='Ingresa una descripcion'
                        className='w-full p-4 leading-tight bg-lightGrey text-gray-700 border-none focus:outline-none focus:shadow-outline'
                    />

                </div>


                <div className='mx-auto w-11/12'>

                </div>



                {/* <div className='w-full px-6 pb-4'>
        <div className='flex justify-end gap-3 items-center'>
          <p> Atras </p>
          <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' > Siguiente </button>
          </div>
      </div> */}

            </div>


        </>
    )
}

export default ServicesDetails