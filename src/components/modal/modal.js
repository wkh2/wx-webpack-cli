import { EVENTS } from '../../constants/constants'

Component({
  externalClasses: ['external-model-class', 'external-text-class'],
  properties: {
    title: String,
    content: String,
    cancelText: {
      type: String,
      value: '取消'
    },
    okText: {
      type: String,
      value: '确定'
    },
    show: {
      type: Boolean,
      value: false,
      observer: function(newVal) {
        this.changeShow(newVal)
      }
    },
    hasCancelBtn: {
      type: Boolean,
      value: true
    }
  },
  data: {
    isShow: false
  },
  methods: {
    changeShow(isShow) {
      this.setData({
        isShow
      })
    },
    onCancelTap() {
      this.triggerEvent(EVENTS.MODAL_CANCEL)
      this.setData({
        isShow: false
      })
    },
    onOKTap() {
      this.triggerEvent(EVENTS.MODAL_OK)
      this.setData({
        isShow: false
      })
    }
  }
})
