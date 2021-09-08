import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit ,OnDestroy {


 
  @Input() products: Products[] = [];
  @Input() isPaginate: boolean = true;
  prefUrlImage = `${environment.prefUrlImage}`;
  prodSub: Subscription = new Subscription;
  currentPage = 0;
  pages = [0,1,2,3,4,5,6];
   
  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        this.products = data;
      }
    );
    this.prodService.emitProducts();
  }
ngOnDestroy(){
  this.prodSub.unsubscribe();
}
}
