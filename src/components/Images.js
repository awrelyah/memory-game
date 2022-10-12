import React from 'react'

function Images(props) {
    const cards = props.images.map((img) => {
        return (
            <div key={img.id} className='card' >
                <img  src={img.url} alt={img.name} />
                <div className='img-name' >{img.name}</div>
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