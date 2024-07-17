
import Header from '../../components/Header'
import ServicioFoto from '../../assets/Images/servicio.png'

const SuccessPay = () => {



    const successData = {
        image: '',
        amount: '$54,00 usd',
        ServiceName: 'Compañia de Luz',
        description: 'Departamento de los sauces'
    }

    return (

        <>
            <div className='flex flex-col items-center justify-between min-h-screen'>

                <Header />

                <div className='text-center spacey-y-6 flex-grow mt-7'>

                    <h2 className='text-center'> ¡Listo! </h2>
                    <p> Pago realizado  a: </p>

                    <div className='mt-6 flex justify-center mb-6'>
                        <img src={ServicioFoto} alt="" />
                    </div>

                    <div>
                        <span > {successData.amount} </span>
                        <p id='beneficiary'> {successData.ServiceName} </p>
                        <p id='bank'> {successData.description} </p>

                    </div>

                </div>


                <div className='w-full px-6 pb-4'>
                    <div className='flex justify-end gap-3 items-center'>
                        <p> Compartir </p>
                        <button className='bg-primary text-white  py-2 px-8 rounded-lg shadow' > Finalizar </button>
                    </div>
                </div>



            </div>



        </>
    )
}

export default SuccessPay