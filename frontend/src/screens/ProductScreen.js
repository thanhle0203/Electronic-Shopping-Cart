import './ProductScreen.css'

const ProductScreen = () => {
  return <div className='productscreen'>
      <div className='productscreen_left'>
        <div className='left_image'>
          <img src='https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          alt='product name'/>
        </div>
        
        <div className='left_info'>
          <p className='left_name'>PlayStation 5</p>
          <p>$499.9</p>
          <p>
            PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment.
          </p>
        </div>

        <div className='productscreen_right'>
          <div className='right_info'>
            <p>
              Price: <span>$499.99</span>
            </p>
            <p>
              Status: <span>Instock</span>
            </p>
            <p>
              Qty
              <select>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
              </select>
            </p>
            <p>
              <button type="button">Add To Cart</button>
            </p>
          </div>
        </div>

      </div>
  </div>;
};

export default ProductScreen;