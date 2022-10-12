import React from 'react'

function Images(props) {
    const cards = props.images.map((img) => {
        return (
            <div key={img.id} id={img.id} className='card' onClick={(e, isClicked)=> props.handleClick(e, img.isClicked)}>
                <img  src={img.url} alt={img.name} id={img.id}  />
                <div className='img-name' id={img.id} >{img.name}</div>
            </div>
        )
    })

  return (
    <div className='cards'>
        {cards}
    </div>
  )
}

export default Images