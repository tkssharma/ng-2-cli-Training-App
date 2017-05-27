
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.html'
})

export class LoaderComponent implements OnInit {
  public activeLoader: boolean;
  public loaderSize = 'medium';
  public loaderText: string;

  constructor() {}

  ngOnInit() {
    this.activeLoader = true;
  }

  toggle(): void {
    this.activeLoader = !this.activeLoader;
  }

  setSize(size: string): void {
    this.loaderSize = size;
  }

}