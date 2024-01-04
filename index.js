const element = (
  <div className='bg-container'>
    <h1 className='heading'></h1>
    <div className='card-container'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
        className='details-img'
      />
      <img
        src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
        className='details-img'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
