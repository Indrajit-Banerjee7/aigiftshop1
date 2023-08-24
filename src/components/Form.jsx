import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

const Form = () => {
  return (
    <div className='Form'>
    <div className="card mb-3">
    <div class="card-header">AI Curated Gift Ideas</div>
        <div className="card-body">
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Relation</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Age</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Occassion</label>
    <input type="text" class="form-control"  placeholder="Gradution Ceremony"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Interest</label>
    <input type="text" class="form-control"  placeholder="Graphic Design"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">Budget</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Profession</label>
    <select id="inputState" class="form-select">
      <option selected>Student</option>
      <option>Designer</option>
      <option>Devloper</option>
      <option>Others</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Others</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        show strictly inside budget
      </label>
    </div>
  </div>
  <div class="col-12">
   <button type="submit" class="btn btn-primary" >
   <NavLink to="/About" style={{ color: 'white', textDecoration: 'none' }}>Get Suggestion</NavLink>
   </button>
      
    
  
   
  </div>
</form>
</div>
    </div>
    </div>
  )
}

export default Form