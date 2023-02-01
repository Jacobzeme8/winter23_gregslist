import { appState } from "../AppState.js"

class JobsService {
  setJob(jobId) {
    const jobIndex = appState.jobs.find(j=> j.id == jobId)
    if(jobIndex < 0){
      throw new Error("not a valid job ID")
    }
    console.log(jobIndex);
  }
}
export const jobsService = new JobsService()