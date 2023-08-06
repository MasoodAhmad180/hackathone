'use client'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { db } from '@/app/config/FirebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import Counter from '../counter/Counter';

function ProductModal({show, handleClose, modalData, setShow}) {

const [products, setProducts] = useState([])
const [count, setCount] = useState(1)
const [modal, setModal] = useState()

const onIncreamentHandler = () =>{
    setCount(count + 1)
}
const onDecreamentHandler = () =>{
    if (count == 1) {
        setCount(1)
    }else{
        setCount(count - 1)
    }
    
}

const modal1Handler = (e) =>{
  setModal(e.target.value)

  console.log(modal);
}
const addToCartHandler = async (item) =>{
  try {
    let newDoc = {
      description:item.description,
      image:item.image,
      price:item.price,
      modal,
    }
    const docRef = await addDoc(collection(db, "cartProducts"), newDoc)
    setProducts([...products, {...newDoc, id:docRef.id}])
    setShow(false)
  } catch (error) {
    console.log(error);
  }
}
  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please, choose a variant:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modalData.map((item)=>{
                return(
                    <>
                    <div className='flex items-start'>
                    <img src={item.image} alt="image" className='w-24' />
                    <h1 className='text-xl font-semibold'>
                        {item.description}
                    </h1>
                    </div>
                    <div className='flex justify-center items-start gap-4 my-5'>
                      <h1 className='text-xl font-semibold'>
                        For <span>{item.category}</span>:
                      </h1>
                      <div className='grid grid-cols-3 gap-3'>
                      {(item.modal1) ? <button value={item.modal1} onClick={modal1Handler} className='text-gray-400 text-lg p-2 border-2 border-black hover:bg-gray-600 hover:text-white rounded-lg'>
                        <span>{item.modal1}</span>
                        </button> : ""}

                        {(item.modal2) ? <button value={item.modal2} onClick={modal1Handler} className='text-gray-400 text-lg p-2 border-2 border-black hover:bg-gray-600 hover:text-white rounded-lg'>
                        <span>{item.modal2}</span>
                        </button> : ""}

                        {(item.modal3) ? <button value={item.modal3} onClick={modal1Handler} className='text-gray-400 text-lg p-2 border-2 border-black hover:bg-gray-600 hover:text-white rounded-lg'>
                        <span>{item.modal3}</span>
                        </button> : ""}

                        {(item.modal4) ? <button value={item.modal4} onClick={modal1Handler} className='text-gray-400 text-lg p-2 border-2 border-black hover:bg-gray-600 hover:text-white rounded-lg'>
                        <span>{item.modal4}</span>
                        </button> : ""}
                        
                      </div>
                    </div>

                    <div className='text-[#EE4A00] text-xl mt-3 ml-3'>
                        {item.price} $
                      </div>

                      <div className='text-xl tracking-wide mt-3 ml-3'>
                        {
                          (modal) ? <span>SKU:{item.category}-{item.description}-{modal}</span>: ""
                        }
                      </div>
                    <Modal.Footer >

                      <div className='flex gap-3'>
                      <Counter 
           count={count} onIncreamentHandler={onIncreamentHandler} onDecreamentHandler={onDecreamentHandler} />
          <button className='bg-[#EE4A00] text-white text-lg py-3 px-3 rounded-lg' onClick={()=>addToCartHandler(item)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" class="svg-inline--fa fa-cart-plus fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
                    <span className='font-semibold ml-2'>Buy</span>
                    </button>
                      </div>
        </Modal.Footer>
                    </>
                    
                )
            })}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;