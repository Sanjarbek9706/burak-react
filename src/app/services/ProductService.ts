import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/data/types/product";


class ProductService {
    private readonly path: string;

    constructor() {
        this.path =  serverApi;
    }

    public async getProducts(input: ProductInquiry): Promise<Product[]> {
        try {
          let url = `${this.path}/product/all?order=${input.order}createdAt&page=${input.page}1&limit=${input.limit}8&productCollection=DISH`;
          if(input.productCollection) url += `&productCollection=${input.productCollection}`;
          if(input.search) url += `&search=${input.search}`;

          const  result = await axios.get(url);
          console.log("getProducts:", result);

          return result.data;
        }catch(err) {
            console.log("Error, getProduct:",err);
            throw err;
        }
    }


}


export default ProductService;