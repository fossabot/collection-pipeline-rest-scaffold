"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class EnforceUniqueUserEmail extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Locates a user in the database by context.domain.user
   *
   * in: context.domain.user
   * out: not used
   * onFail: FailHandler
   * oonNext: NextHandler
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}