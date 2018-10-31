"use strict"

import express from "express"
import IFinishResponder from "../../responders/i-finish-responder"

export default class FinishResponder201 implements IFinishResponder {
  public handle(req: express.Request, res: express.Response): void {
    res.json({ status: 201 })
  }
}
