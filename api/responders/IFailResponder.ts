"use strict"

import express as "express"

export default interface IFailResponder {
  handle(req: express.Request, res: express.Response, err: Error): void
}
