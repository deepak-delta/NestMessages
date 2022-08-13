import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { json } from 'stream/consumers';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'This action returns all messages';
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
