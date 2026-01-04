package com.ronak.shophubbackend.Service;

import com.ronak.shophubbackend.DTO.SellerOverview;
import com.ronak.shophubbackend.Model.Order;
import com.ronak.shophubbackend.Model.Product;
import com.ronak.shophubbackend.Repo.OrderRepo;
import com.ronak.shophubbackend.Repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SellerService {

    @Autowired
    OrderRepo or;

    @Autowired
    ProductRepo productRepo;


    public SellerOverview getDashBoard(long id){
        List<Order>list=or.findBySellerId(id);
        List<Product> products=productRepo.findBySellerId (id);
        int a=0;
        int b=0;
        long c=0;
        int d=0;
        for(Order order:list){
            if(order.getStatus()== Order.OrderStatus.PENDING){
                d++;
            }
            else if(order.getStatus()==Order.OrderStatus.DELIVERED){
                c+=((order.getPrice().intValue())*((int)order.getQuantity()));
            }
            b++;
        }

        a=products.size();

        SellerOverview sellerOverview = new SellerOverview(a,b,d,c);
        return sellerOverview;
    }
}
