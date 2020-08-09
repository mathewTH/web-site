import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useEmblaCarousel } from 'embla-carousel/react';

const PhotoCarousel = ({ name }) => {
  const data = useStaticQuery(graphql`
    query photoCarouselQuery {
      allContentfulPhotoCarousel {
        nodes {
          id
          name
          photos {
            title
            fluid(maxWidth:800, maxHeight: 500) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }  
  `)

  const autoPlay = (embla, interval) => {
    const state = { timer: 0 }
  
    const play = () => {
      stop()
      requestAnimationFrame(
        () => (state.timer = window.setTimeout(next, interval))
      )
    }
  
    const stop = () => {
      window.clearTimeout(state.timer)
      state.timer = 0
    }
  
    const next = () => {
      if (embla.canScrollNext()) {
        embla.scrollNext()
      } else {
        embla.scrollTo(0)
      }
      play()
    }
  
    return { play, stop };
  }

  const photoCarousel = data.allContentfulPhotoCarousel.nodes.find(node => node.name === name)
  const images = photoCarousel.photos.map(photo => 
      <Img fluid={photo.fluid} key={photo.id} className="embla__slide" />
  )

  const carouselOptions = {
    slidesToScroll: 1,
    containScroll: false,
    draggable: true,
    dragFree: false,
    loop: true,
    speed: 10,
    startIndex: 0,
  }

  const [EmblaCarouselReact, embla] = useEmblaCarousel(carouselOptions)

  useEffect(() => {
    if (!embla)
      return

    const state = { timer: 0 }
    const interval = 3000
  
    const play = () => {
      stop()
      requestAnimationFrame(
        () => (state.timer = window.setTimeout(next, interval))
      )
    }
  
    const stop = () => {
      window.clearTimeout(state.timer)
      state.timer = 0
    }
  
    const next = () => {
      if (embla.canScrollNext()) {
        embla.scrollNext()
      } else {
        embla.scrollTo(0)
      }
      play()
    }
  
    play();
  }, [embla])

  return (
    <EmblaCarouselReact>
      <div className="embla">
        <div className="embla__container">
          {images}
        </div>
      </div>
    </EmblaCarouselReact>
  )
}

export default PhotoCarousel;
