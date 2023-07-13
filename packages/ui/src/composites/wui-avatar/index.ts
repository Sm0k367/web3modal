import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '../../components/wui-image'
import { resetStyles } from '../../utils/ThemeUtil'
import styles from './styles'
import { UiHelperUtil } from '../../utils/UiHelperUtils'

@customElement('wui-avatar')
export class WuiAvatar extends LitElement {
  public static styles = [resetStyles, styles]

  // -- State & Properties -------------------------------- //
  @property() public imageSrc?: string = undefined

  @property() public alt?: string = undefined

  @property() public address?: string = undefined

  // -- Render -------------------------------------------- //
  public render() {
    return html`${this.visualTemplate()}`
  }

  // -- Private ------------------------------------------- //
  public visualTemplate() {
    if (this.imageSrc && this.alt) {
      this.dataset.variant = 'image'

      return html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`
    } else if (this.address) {
      this.dataset.variant = 'generated'
      const cssColors = UiHelperUtil.generateAvatarColors(this.address)
      this.style.cssText = cssColors

      return null
    }
    this.dataset.variant = 'default'

    return null
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-avatar': WuiAvatar
  }
}
