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



}
