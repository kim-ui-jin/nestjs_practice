import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import type { Board, BoardStatus } from './boards.model'

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    // 모든 게시물 가져오기
    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards()
    }

    @Get(':id')
    getBoardById(@Param('id') id: string) {
        return this.boardsService.getBoardById(id)
    }

    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ): Board {
        return this.boardsService.createBoard(title, description);
    }

    @Patch(':id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status') status: BoardStatus
    ): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }

    @Delete(':id')
    deleteBoard(@Param('id') id: string): void {
        return this.boardsService.deleteBoard(id);
    }
}
