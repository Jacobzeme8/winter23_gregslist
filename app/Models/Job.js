import { generateId } from "../Utils/generateId.js"


export class Job { 

constructor(data){
  this.title = data.title
  this.salary = data.salary
  this.description = data.description
  this.image = data.image
  this.degree = data.degree
  this.id = generateId()

}

get listingTemplate(){
  return `<div class="col-md-4 my-3">
  <div class="card elevation-2 job" onclick="app.jobsController.setJob('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
    <img
      src="${this.image}"
      alt="" class="rounded">
    <h2><b>${this.title}: </b>${this.description}</h2>
    <h4>Degree required: ${this.degree}</h4>
    <h4>Salary: ${this.salary}</h4>
  </div>
</div>`
}

static jobForm(){
  return/*html*/`
  <form onsubmit = "app.jobsController.handleJobsForm()">

  <div class="form-floating mb-3">
  <input type="text" class="form-control" name="title" required minlength="2" maxlength="20">
  <label for="title">Job Title</label>
</div>

<div class="form-floating mb-3">
  <input type="text" class="form-control" name="description" required>
  <label for="description">Job Description</label>
</div>

<div class="form-check mb-3">
  <label for="degree">Degree required</label>
  <input type="checkbox" class="form-check-input" name="degree" required>
</div>

<div class="form-floating mb-3">
  <input type="number" class="form-control" name="salary" required min="0">
  <label for="salary">salary</label>
</div>

<div class="form-floating mb-3">
  <input type="url" class="form-control" name="imgUrl">
  <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
</div>

<div class="d-flex my-4 gap-5 align-items-center">
  <button class="btn" type="reset">Cancel</button>
  <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
</div>
  </form>
  `
}

}
