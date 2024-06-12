import React from 'react'

const Clock = ({counter}) => {
    const	digitOne= Math.floor(counter/1) % 10
	const	digitTwo = Math.floor(counter/10) % 10
	const	digitThree = Math.floor(counter/100) % 10
	const	digitFour = Math.floor(counter/1000)% 10 
  return (
    <div id="mainDiv" className="d-flex justify-content-center fs-1 bg-dark text-light">
        <i className="fa-solid fa-clock border border-2 fs-1 pt-3"></i>
        <div className="border border-2 fs-1 p-2" id="digitFour">
            {digitFour}
        </div>
        <div className="border border-2 fs-1 p-2" id="digitThree">
            {digitThree}
        </div>
        <div className="border border-2 fs-1 p-2" id="digitTwo">
            {digitTwo}
        </div>
        <div className="border border-2 fs-1 p-2" id="digitOne">
            {digitOne}
        </div>
    </div>
  )
}

export default Clock
