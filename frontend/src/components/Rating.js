import React from 'react'
import {BsStarFill,BsStarHalf, BsStar} from 'react-icons/bs'

const Rating = ({value, text, color='#f8e825'}) => {
  return (
    <div className='rating'>
        
            {value >= 1 ? <BsStarFill size='1.0rem' style = {{color, margin:'.1rem'}}/> : value >= 0.5 ? <BsStarHalf size='1.0rem' style = {{color, margin:'.1rem'}}/> : <BsStar size='1.0rem' style = {{color, margin:'.1rem'}}/>  }
       
       
            {value >= 2 ? <BsStarFill size='1.0rem' style = {{color, margin:'.1rem'}}/> : value >= 1.5 ? <BsStarHalf size='1.0rem' style = {{color, margin:'.1rem'}}/> : <BsStar size='1.0rem' style = {{color, margin:'.1rem'}}/>  }
       
    
            {value >= 3 ? <BsStarFill size='1.0rem' style = {{color, margin:'.1rem'}}/> : value >= 2.5 ? <BsStarHalf size='1.0rem' style = {{color, margin:'.1rem'}} /> : <BsStar size='1.0rem' style = {{color, margin:'.1rem'}}/>  }
        
      
            {value >= 4 ? <BsStarFill size='1.0rem' style = {{color, margin:'.1rem'}}/> : value >= 3.5 ? <BsStarHalf size='1.0rem' style = {{color, margin:'.1rem'}}/> : <BsStar size='1.0rem' style = {{color, margin:'.1rem'}} />  }
     
        
            {value >= 5 ? <BsStarFill size='1.0rem' style = {{color, margin:'.1rem'}}/> : value >= 4.5 ? <BsStarHalf size='1.0rem' style = {{color, margin:'.1rem'}}/> : <BsStar size='1.0rem' style = {{color, margin:'.1rem'}} />  }
        
        {text && <span className='rating-text'>{text}</span>}
    </div>
  )
}

export default Rating