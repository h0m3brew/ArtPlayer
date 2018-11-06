import { append, tooltip, setStyle } from '../utils';
import icons from '../icons';

export default class FullscreenWeb {
  constructor(option) {
    this.option = option;
  }

  apply(art, $control) {
    const { events: { proxy }, i18n, player } = art;
    this.$fullscreenWeb = append($control, icons.fullscreenWeb);
    tooltip(this.$fullscreenWeb, i18n.get('Web fullscreen'));
    proxy($control, 'click', () => {
      if (player.fullscreenWebState) {
        player.fullscreenWebExit();
        setStyle(this.$fullscreenWeb, 'opacity', '1');
        tooltip(this.$fullscreenWeb, i18n.get('Web fullscreen'));
      } else {
        player.fullscreenWebEnabled();
        setStyle(this.$fullscreenWeb, 'opacity', '0.8');
        tooltip(this.$fullscreenWeb, i18n.get('Exit web fullscreen'));
      }
    });
  }
}