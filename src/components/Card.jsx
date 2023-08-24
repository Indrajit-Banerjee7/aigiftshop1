import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = () => {
  return (
    <div className='Card'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1681143720-51tI8BNFwVL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Herbs</h5>
              <h5 class="card-title">$105</h5>
              <p class="card-text">Farmhouse Herb Garden Planter</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Avaliable Now</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1644336766-41MgbNmN0GL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Gold Bracelet</h5>
              <h5 class="card-title">$105</h5>
              <p class="card-text">14K Gold Plated Cubic Zirconia Tennis Bracelet</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Avaliable Now</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1690228175-51q7d1TAcQL.jpg?crop=1xw:1.00xh;center,top&resize=980:*" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Alarm Clock</h5>
              <h5 class="card-title">$33</h5>
              <p class="card-text">Wake Up Light Sunrise Alarm Clock</p>
              <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">Avaliable Now</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card