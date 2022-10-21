import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Provider} from "../../../models/provider/provider.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-provider-index',
  templateUrl: './provider-index.component.html',
  styleUrls: ['./provider-index.component.scss']
})
export class ProviderIndexComponent implements OnInit {

  providers: Provider[] = [];

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute) {
    this.getProviders();
  }

  ngOnInit(): void {
  }

  getProviders() {
    this.apiService.getData('providers').subscribe((data: any) => {
      this.providers = data;
    });
  }

  deleteProvider(id: number) {
    this.apiService.deleteData(`providers/${id}`).subscribe((data: any) => {
      this.getProviders();
    });
  }

}
