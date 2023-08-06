'use client'


const Counter = ({count, onDecreamentHandler, onIncreamentHandler}) =>{

    return(
        <>
        <div className="w-40 flex border-2 justify-around items-center rounded-lg">
        <button className="py-2 px-3 border-3 border-black rounded-l-lg text-gray-500 hover:text-white hover:bg-gray-600" onClick={onDecreamentHandler}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </button>
        <div className="w-20 text-center align-baseline">{count}</div>
        <button className="py-2 px-3 border-3 border-black rounded-r-lg text-gray-500 hover:text-white hover:bg-gray-600" onClick={onIncreamentHandler}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </button>
        </div>
        </>
    )
}

export default Counter