import { Book } from './book.model';
import { BookService } from './book.service';
import { Controller } from '@nestjs/common/decorators/core';
import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common/decorators/http';

@Controller('api/v1/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBook(): Promise<Book[]> {
    return this.bookService.getAllBook();
  }

  @Get(':id')
  async getBook(@Param('id') id: number): Promise<Book | null> {
    return this.bookService.getBook(id);
  }

  @Post()
  async postBook(@Body() data: Book): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<Book> {
    return this.bookService.deleteBook(id);
  }

  @Put(':id')
  async updateBook(@Body() data: Book, @Param('id') id: number): Promise<Book> {
    return this.bookService.updateBook(id, data);
  }
}
