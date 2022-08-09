import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'This action returns all messages';
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage() {}
}
