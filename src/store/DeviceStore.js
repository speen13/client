import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 7;
    this.basket = [];

    this.count = 0;

    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
  }
  discrement() {
    this.count = this.count - 1;
  }

  endDiscrement(count) {
    this.count = count;
  }

  filterBasket(id) {
    this.basket = this.basket.filter((el) => el.id !== id);
  }

  setBasket(basket) {
    this.basket.push(basket);
  }

  endBasket(basket) {
    this.basket = basket;
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedBasket(basket) {
    this._selectedBasket = basket;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  // get basket() {
  //   return this._basket;
  // }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }
}
