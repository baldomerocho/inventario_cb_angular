import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-provider-create',
  templateUrl: './provider-create.component.html',
  styleUrls: ['./provider-create.component.scss']
})
export class ProviderCreateComponent implements OnInit {

  providerFormCreate = {
    name: '',
    nit: '',
  }

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  createProvider() {
    this.apiService.postData(this.providerFormCreate,'providers' ).subscribe((data: any) => {
      console.log(data)
    });
  }

}
