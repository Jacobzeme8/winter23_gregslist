import { Car } from "./Models/Car.js"
import { Job } from "./Models/Job.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car} */
  car = null

  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({
      title: "Cook",
      salary: 25000,
      description: "burn yourself,and hate life",
      image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F09%2Fgordon-ramsay-hells-kitchen-02-2000.jpg&q=60",
      degree: false,
      id: generateId()
    })
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
