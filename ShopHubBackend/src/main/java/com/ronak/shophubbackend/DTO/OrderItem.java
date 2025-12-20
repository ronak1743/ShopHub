package com.ronak.shophubbackend.DTO;

import com.ronak.shophubbackend.Model.Order;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class OrderItem {
    private  long id;
    private String name;
    private int qty;
    private LocalDateTime date;
    private Order.OrderStatus status;
    private BigDecimal price;
    private String image;

    public OrderItem(long id, String name, int qty, LocalDateTime date, Order.OrderStatus status, BigDecimal price, String image) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.date = date;
        this.status = status;
        this.price = price;
        this.image = image;
    }

    public OrderItem(Order o){
        this.date=o.getCreatedAt();
        this.status=o.getStatus();
        this.qty=o.getQuantity();
        this.id=o.getId();
        this.price=o.getPrice();

    }

    public OrderItem() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Order.OrderStatus getStatus() {
        return status;
    }

    public void setStatus(Order.OrderStatus status) {
        this.status = status;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
