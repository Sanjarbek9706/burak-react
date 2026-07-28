export interface CartItem {
  _id: string;
  quantity: number;
  name: string;
  price: number;
  image: string;          
  productImages?: string[]; // '?' belgisi qo'shildi (ixtiyoriy bo'ldi)
}