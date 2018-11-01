"use strict"

import IComponentConfig from "../config/i-component-config"
import IContext from "../context/i-context"
import { domainLogger } from "../lib/log/logger"
import Component from "./component"

export default class BuildDbQueryFromContext extends Component {
  public constructor(config: IComponentConfig) {
    super(config)
  }

  /*
   * @TODO: implement method behaviour
   * @TODO: implement @Log()
   * Builds a db query from paramters given in the Context. Adds query
   * to context
   *
   * Refer to: https://github.com/diegohaz/schm/tree/master/packages/schm-mongo
  */
  public execute(context: IContext): void {
    domainLogger.info({ component: this.constructor.name })
    return
  }
}
