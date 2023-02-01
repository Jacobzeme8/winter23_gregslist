import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js";
import { setHTML } from "../Utils/Writer.js";

class JobsService {
  handleJobsForm(jobsData) {
    let newJob = new Job(jobsData)
    appState.jobs.push(newJob)
    appState.emit('jobs')
  }
  setJob(jobId) {
    const jobIndex = appState.jobs.findIndex(j=> j.id == jobId)
    if(jobIndex < 0){
      throw new Error("not a valid job ID")
    }
    console.log(jobIndex);
    setHTML('listing-modal-body', appState.jobs[jobIndex].jobDetailsTemplate)
  }

  deleteJob(jobId){
    const jobIndex = appState.jobs.findIndex(j => j.id == jobId)
    if(jobIndex < 0){throw("thats a bad id man")}
    appState.jobs.splice(jobIndex, 1)
    appState.emit('jobs')
  }

}
export const jobsService = new JobsService()