import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-provider-update',
  templateUrl: './provider-update.component.html',
  styleUrls: ['./provider-update.component.scss']
})
export class ProviderUpdateComponent implements OnInit {

  providerFormUpdate = {
    name: '',
    nit: '',
  }

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute) {
    this.getInfoProvider();
  }

  ngOnInit(): void {
  }

  getInfoProvider() {
    this.activatedRoute.params.subscribe(params => {
      this.apiService.getData(`providers/${params['id']}`).subscribe((data: any) => {
        this.providerFormUpdate = data;
      });
    })
  }

  updateProvider() {
    this.apiService.putData(this.providerFormUpdate,'providers' ).subscribe((data: any) => {
      console.log(data)
    });
  }

}
