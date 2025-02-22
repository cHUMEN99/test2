class Product {
    private _id: number;
    private _title: string;
    private _category: string;
    private _description: string;
    private _price: number;
  
    constructor(id: number, title: string, category: string, description: string, price: number) {
      this._id = id;
      this._title = title;
      this._category = category;
      this._description = description;
      this._price = price;
    }
  
   
    get id(): number {
      return this._id;
    }
  
    set id(value: number) {
      this._id = value;
    }
  
    
    get title(): string {
      return this._title;
    }
  
    set title(value: string) {
      this._title = value;
    }
  
    
    get category(): string {
      return this._category;
    }
  
    set category(value: string) {
      this._category = value;
    }
  
    get description(): string {
      return this._description;
    }
  
    set description(value: string) {
      this._description = value;
    }
  
    get price(): number {
      return this._price;
    }
  
    set price(value: number) {
      this._price = value;
    }
  }
  
  export default Product;
  