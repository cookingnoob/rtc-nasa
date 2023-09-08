import React from 'react'

const RenderContent = ({ content }) => {

  if (!content) {
    return (
      <>
        <h1>Page down ☠️</h1>
      </>
    )
  } else if (content.explanation) {
    return (
      <>
        <div className='media'>
          <h1 className='title'>{content.title}</h1>
          {content.media_type == "video" ? <iframe src={content.url} className='video'></iframe> : <img className='image' src={content.url} alt={content.title} />}
          <p className='date-copyright'>{content.copyright} {content.date}</p>
        </div>
        <div className='explanation-container'>
          <h2 className='title-explanation'>{content.title}</h2>
          <p className='explanation'>{content.explanation}</p>
        </div>
      </>
    )
  } else if (content.latest_photos) {
    return (
      <>
        <div className='media'>
          <h1 className='title-curiosity'>{content.latest_photos[0].rover.name}</h1>
          <p className='date-copyright-curiosity'>Latest Update was on: {content.latest_photos[0].earth_date}</p>
          <img className='image' src={content.latest_photos[0].img_src} alt="" />
        </div>
        <div className='explanation-container'>
          <p className='explanation'>The Mars Rover Curiosity, a marvel of space engineering, touched down on Mars in August 2012. For over a decade, it has been exploring the Martian landscape, providing invaluable insights into the red planet. Equipped with an array of scientific instruments, Curiosity has studied the geology, atmosphere, and potential past habitability of Mars. Its discoveries include evidence of ancient bodies of water, organic compounds, and past conditions conducive to microbial life. Curiosity has shown that Mars was once a warmer, wetter world, fueling excitement and hope for future exploratory missions.</p>
        </div>
      </>
    )
  }
}

export default RenderContent


