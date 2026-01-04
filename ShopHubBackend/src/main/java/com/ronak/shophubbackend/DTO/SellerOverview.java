package com.ronak.shophubbackend.DTO;

public class SellerOverview {
    int products,totalOrder,pending;
            long income;

    public SellerOverview(int products, int totalOrder, int pending, long income) {
        this.products = products;
        this.totalOrder = totalOrder;
        this.pending = pending;
        this.income = income;
    }

    public SellerOverview() {
    }

    public int getProducts() {
        return products;
    }

    public void setProducts(int products) {
        this.products = products;
    }

    public int getTotalOrder() {
        return totalOrder;
    }

    public void setTotalOrder(int totalOrder) {
        this.totalOrder = totalOrder;
    }

    public int getPending() {
        return pending;
    }

    public void setPending(int pending) {
        this.pending = pending;
    }

    public long getIncome() {
        return income;
    }

    public void setIncome(int income) {
        this.income = income;
    }
}
