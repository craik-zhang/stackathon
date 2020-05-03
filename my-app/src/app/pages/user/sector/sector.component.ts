import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/services/user/sector.service';

@Component({
    selector: 'app-sector',
    templateUrl: './sector.component.html',
    styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

    constructor(private sectorService: SectorService) { }

  
    ngOnInit(): void {
    //   this.iposService.allIpos().subscribe(data => {
    //     console.log(JSON.stringify(data));
    //   })
    //   this.ipos = IPOS;
    }
  
  }