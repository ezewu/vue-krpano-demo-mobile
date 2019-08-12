((win, doc) => {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  const recalc = () => {
    const clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = (clientWidth / 375 * 20) + 'px'
  }
  if (!doc.addEventListener) return

  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window, document)
