import { Product,productStore } from "../models/product";

const store = new productStore()

describe('Product model',()=>{
    it('should have an index method',()=>{
        expect(store.index).toBeDefined();
    })
})