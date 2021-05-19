import * as Geolonia from '@geolonia/embed'

const HelloGeoloniaPlugin: Geolonia.EmbedPlugin = (map, target, atts) => {
  alert(atts.myText || 'Hello, Maps!')
}

window.geolonia.registerPlugin(HelloGeoloniaPlugin)
