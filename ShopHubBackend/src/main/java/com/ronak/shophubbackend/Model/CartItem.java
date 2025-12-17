package com.ronak.shophubbackend.Model;

import jakarta.persistence.Entity;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class CartItem {
    private Long id;
    private String name;
    private BigDecimal price;
    private String imgUrl;
    private Integer quantity;

    public CartItem() {
    }

    public CartItem(Long id, String name, BigDecimal price, String imgUrl, Integer quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
