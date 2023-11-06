import { PrismaService } from 'src/prisma.service';
import { Book } from './book.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async getAllBook(): Promise<Book[]> {
    const books = this.prisma.book.findMany();
    return books;
  }

  async getBook(id: number): Promise<Book | null> {
    const book = this.prisma.book.findUnique({ where: { id: Number(id) } });
    return book;
  }

  async createBook(data: Book): Promise<Book | null> {
    const book = this.prisma.book.create({
      data,
    });
    return book;
  }

  async updateBook(id: number, data: Book): Promise<Book | null> {
    const updatedBook = this.prisma.book.update({
      where: { id: Number(id) },
      data: { title: data.title, description: data.description },
    });
    return updatedBook;
  }

  async deleteBook(id: number): Promise<Book | null> {
    const deletedBook = this.prisma.book.delete({ where: { id: Number(id) } });
    return deletedBook;
  }
}
