// Partial Copyright Jerome Benoit. 2021-2024. All Rights Reserved.

import { BaseError } from './BaseError.js'
import type { ErrorType, IncomingRequestCommand, JsonType, RequestCommand } from '../types/index.js'
import { Constants } from '../utils/index.js'

export class OCPPError extends BaseError {
  code: ErrorType
  command: RequestCommand | IncomingRequestCommand
  details?: JsonType

  constructor (
    code: ErrorType,
    message: string,
    command?: RequestCommand | IncomingRequestCommand,
    details?: JsonType
  ) {
    super(message)

    this.code = code
    this.command = command ?? Constants.UNKNOWN_OCPP_COMMAND
    this.details = details
  }
}
