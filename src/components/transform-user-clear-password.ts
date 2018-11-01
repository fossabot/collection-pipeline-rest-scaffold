"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class TransformUserClearPassword extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Transforms the clear-text context.user.clearPassword into an
   * encrypted password, and stores in context.user.encPassword
   *
   * in: context.domain.user.clearPassword
   * out: context.db.user.encPassword
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}