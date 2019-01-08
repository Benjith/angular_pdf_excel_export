import { Component } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ExcelService } from './excel_service';
import { DomEventsPlugin } from '@angular/platform-browser/src/dom/events/dom_events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'report';
  constructor(private excelService:ExcelService){

  }
  data: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
  },
  {
    eid: 'e102',
    ename: 'ram',
    esal: 2000
  },
  {
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
  }];
  _pdfExport(){
    var doc = new jsPDF();
        var element = '<button>html elemet</button>'
        doc.fromHTML(element,10,10)
        doc.autoPrint() //if auto print needed
        doc.save('Test.pdf');   // Save the PDF
  }
  _exelExport(){
  
    this.excelService.exportAsExcelFile(this.data, 'sample');
    
  }


}
