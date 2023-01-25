import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import jspdf from 'jspdf';
import 'jspdf-autotable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit{

  allTransaction:any
  searchkey:string=''
  constructor(private api:ApiService,private router:Router){

   }

  ngOnInit(): void {
        // to check the account holder already logged in
        if(!localStorage.getItem('token')){
          alert('Please LogIn!!!')
       // navigate login
   this.router.navigateByUrl('')
        }
    this.api.getAllTransactions()
    .subscribe((result:any)=>{
      console.log(result);
      this.allTransaction = result.transaction
      console.log(this.allTransaction);
      
    })
  }
  // search
  search(event:any){
    this.searchkey = event.target.value 
  }

  // generatepdf
  generatepdf(){
    var pdf = new jspdf()
    let col = ['Type','FromAcno','ToAcno','Amount']
    let row:any = []
    pdf.setFontSize(16);
    pdf.text('Transaction History', 11, 8);
    pdf.setFontSize(12);
    pdf.setTextColor(99);

    // convert allTransaction to nested array
    var itemNew = this.allTransaction 
    for(let element of itemNew){
      var temp = [element.type,element.fromacno,element.toacno,element.amount]
      row.push(temp)
    }
    (pdf as any).autoTable(col,row,{startY:10})
   // Open PDF document in browser's new tab
     pdf.output('dataurlnewwindow') 
     // Download PDF doc  
     pdf.save('ministatement.pdf');
  }
}
