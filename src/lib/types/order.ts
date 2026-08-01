import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItemInput {
    itemQuantity: number;
    itemPrice: number;
    productId: String;
    orderId?: String;
}

export interface OrderItem {
    _id: string;
    itemQuantity: number;
    itemPrice: number;
    orderId: String;
    productId: String;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {
    _id: string;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: String;
    createdAt: Date;
    updatedAt: Date;
    /** from aggregation **/
    orderItems: OrderItem[];
    productData: Product[];
}


export interface OrderInquiry {
    page: number;
    limit: number;
    orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
    orderId: string;
    orderStatus: OrderStatus; 
}