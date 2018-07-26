import { EVENTS } from '../../constants/constants'

Component({
  externalClasses: ['external-btn-class'],
  properties: {
    innerText: String,
    size: String,
    color: String,
    shape: String
  },
  data: {},
  methods: {
    onTap() {
      this.triggerEvent(EVENTS.BUTTON_CLICK)
    }
  }
})
