import { Controller, Get, Post, Body, Patch, Param, Delete, Res, StreamableFile } from '@nestjs/common';
import { OverallreportService } from './overallreport.service';
import { CreateOverallreportDto } from './dto/create-overallreport.dto';
import { UpdateOverallreportDto } from './dto/update-overallreport.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('overallreport')
export class OverallreportController {
  constructor(private readonly overallreportService: OverallreportService) {}

  @Get('/qce-over-all/pdf')
async generatePdf2(@Res() res) {
    const buffer = await this.overallreportService.secondExample();
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename=pdf.pdf`,
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    res.end(buffer);
  }
  @Get('Header')
  getFile(@Res({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'images/Capture.png'));
    res.set({
      'Content-Type': 'image/png',
    });
    return new StreamableFile(file);
  }
  @Get('Footer')
  getFiles(@Res({ passthrough: true }) res): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'images/CaptureFooter.png'));
    res.set({
      'Content-Type': 'image/png',
    });
    return new StreamableFile(file);
  }


  @Get('/pdf/get-reports-by-faculty/:facultyid')
async generatePdfByFaculty(@Res() res, @Param('facultyid') facultyid: number) {
    const buffer = await this.overallreportService.generatePdfByFaculty(facultyid);
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename=byFaculty.pdf`,
      'Content-Length': buffer.length,
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    res.end(buffer);
  }
}
