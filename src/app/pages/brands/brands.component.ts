import { ToastrService } from 'ngx-toastr';
import { BrandService } from './../../Services/brand.service';
import { Brand } from './../../Models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: Brand[] = [];
  filterText: string = '';
  dataLoaded: boolean = false;

  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  delete(brand: Brand) {
    this.brandService.delete(brand).subscribe((response) => {
      this.toastrService.success(response.message, 'Başarılı');
      this.getBrands();
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }
}
