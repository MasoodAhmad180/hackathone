'use client'

import { useEffect, useState } from "react"
import { db, storage } from "../config/FirebaseConfig"
import { getDocs, collection, doc } from "firebase/firestore"
import Navbar from "../(components)/navbar/Navbar"

export default function IPad2 () {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProductsHandler()
    }, [])

    const getProductsHandler = async () => {
        try {
          let productsList = []
          const querySnapshot = await getDocs(collection(db, "Ipad2"));
          querySnapshot.forEach((doc) => {
            productsList.push({
              description: doc.data().description,
              price:doc.data().price,
              category:doc.data().category,
              image: doc.data().image,
              modal1:doc.data().modal1,
              modal2:doc.data().modal2,
              modal3:doc.data().modal3,
              modal4:doc.data().modal4,
              id: doc.id
            })
          });
          setProducts(productsList)
        } catch (error) {
          console.log(error);
        }
      }
      const [show, setShow] = useState(false);
      const [modalData, setModalData] = useState([])

      const addDataIntoModal = (item) => {
        let cartData = {
          description: item.description,
          image:item.image,
          price:item.price,
          modal1:item.modal1,
          modal2:item.modal2,
          modal3:item.modal3,
          modal4:item.modal4,
          category:item.category
        }
        setModalData([cartData])
        setShow(true)
      }
      const handleClose = () => setShow(false);
    return(
        <>
        <Navbar/>
        <div className='mx-auto my-5'>
      <h1 className='text-4xl font-semibold text-center  mx-auto'>IPad 4/3/2</h1>
      </div>
      <div className='grid grid-cols-4 gap-2'>
      {
        products.map((item) => {
          return (
            <>
              <div className="w-96 mt-4 border-4 mx-auto overflow-hidden">
                  <img 
                    src={item.image}
                    alt='image'
                    className='w-96 mx-auto my-2' />
                <div className="px-4 py-2">
                  <p className="text-gray-600 text-xl text-center font-semibold">
                    {item.description}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='ml-5 text-xl font-semibold text-[#EE4A00]'>
                    {item.price} <span>
                      {(item.price) ? "$" : ""}
                    </span>
                  </p>
                <button className="bg-[#EE4A00] py-3 px-4 float-right mr-2 mb-2" onClick={() => addDataIntoModal(item)}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-plus" class="svg-inline--fa fa-cart-plus fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path></svg>
                </button>
                </div>
              </div>
            </>
          )
        })
      }
      </div>
      <ProductModal show={show} modalData={modalData} handleClose={handleClose} setShow={setShow}/>
        </>
    )
}