package com.example.carselling.Model;

import javax.persistence.*;

@Entity
@Table(name="Deals")
public class Deal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="price")
    private float price;

    @Column(name="cc")
    private float cc;

    @Column(name="year")
    private int year;

    @Column(name="hp")
    private int hp;

    @Column(name="fuel")
    private String fuel;

    @Column(name = "picture", length = 1024)
    private String picture;

    @Column(name="posted")
    private int posted;

    @Column(name="actual_seller_id")
    private long actual_seller_id;

    @Column(name="buyId")
    private long buyId;



    public Deal(){

    }

    public Deal(float price, float cc, int year, int hp, String fuel, String picture, long actual_seller_id){
        super();
        this.price = price;
        this.cc = cc;
        this.year=year;
        this.hp=hp;
        this.fuel=fuel;
        this.picture = picture;
        this.actual_seller_id = actual_seller_id;
    }


    public Deal(float price, float cc, int year, int hp, String fuel){
        super();
        this.price = price;
        this.cc = cc;
        this.year = year;
        this.hp = hp;
        this.fuel = fuel;

    }


    public long getBuyId() {
        return buyId;
    }

    public void setBuyId(long buyId) {
        this.buyId = buyId;
    }

    public long getactual_seller_id() {
        return actual_seller_id;
    }

    public void setActual_seller_id(long actual_seller_id) {
        this.actual_seller_id = actual_seller_id;
    }

    public int getPosted() {
        return posted;
    }

    public void setPosted(int posted) {
        this.posted = posted;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getCc() {
        return cc;
    }

    public void setCc(float cc) {
        this.cc = cc;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }


}
