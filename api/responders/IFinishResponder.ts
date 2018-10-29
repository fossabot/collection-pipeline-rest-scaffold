"use strict"

import express as "express"

export default interface IFinishResponder {
  handle(req: express.Request, res: express.Response): void
}
