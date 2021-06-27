import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    console.log(exception);

    let resposta;
    if (exception?.getStatus() === 500) {
      resposta = {
        statusCode: exception.getStatus(),
        message: exception.message,
        timestamp: new Date(),
        path: request.url,
      };
    } else {
      resposta = {
        statusCode: exception.getStatus(),
        message: exception.message,
        errors: this.getExceptionErrorList(exception),
        timestamp: new Date(),
        path: request.url,
      };
    }
    response.status(exception.getStatus()).json(resposta);
    response.end;
  }

  private getExceptionErrorList(exception): string[] {
    const errorList =
      exception?.getResponse()?.message || exception?.getResponse();

    return errorList || [];
  }
}
