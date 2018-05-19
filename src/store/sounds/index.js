import select from '../../../static/sound/select.mp3'
import lose from '../../../static/sound/lose.mp3'

export default {
  actions: {
    soundSelect() {
      let soundSelect = new Audio(select)
      soundSelect.play()
    },
    soundLose() {
      let soundLose = new Audio(lose)
      soundLose.play()
    }
  }
}
