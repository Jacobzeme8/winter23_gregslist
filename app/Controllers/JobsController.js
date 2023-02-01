import { setHTML, setText } from "../Utils/Writer.js"
import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { Pop } from "../Utils/Pop.js"
import { Job } from "../Models/Job.js"

function _drawJobs(){
  let jobs = appState.jobs
  let cardTemplate = " "
  jobs.forEach(j => cardTemplate += j.listingTemplate)
  console.log(cardTemplate);
  setHTML('listings', cardTemplate)
}

export class JobsController {


  constructor() {
    
  }
  setJob(jobId){
    try {
      jobsService.setJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }

  handleJobsForm(jobData){
    try {
      jobsService.handleJobsForm()
    } catch (error) {
      Pop.error(error)
    }
  }

  show() {
    
    setText('add-listing-button', '🪦 Dead end Job?')
    setText('listingFormLabel', '🪦 Dig up a new Job')
    _drawJobs()
    setHTML('the-actual-form', Job.jobForm())
  }
}
