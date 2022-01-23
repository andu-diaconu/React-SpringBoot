package com.example.carselling.Model;

import javax.persistence.*;

@Entity
@Table(name="Users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

    @Column(name="username")
    protected String username;

    @Column(name="password")
    protected String password;

    @Column(name="balance")
    protected int balance;

    @Column(name="Role")
    protected String role;

    public User(){

    }

    public User(String user, String pass, int balance, String role){
        super();
        this.username=user;
        this.password=pass;
        this.balance=balance;
        this.role=role;

    }


    public int addBalance(int amount){
        this.balance += amount;
        return this.balance;
    }

    public int getBalance(int amount){
        if(amount <= balance){
            this.balance -= amount;
            return amount;
        }
        else{
            return (balance-amount);
        }
    }

    public int logIn(String user, String pass){
        if(user.equals(this.username)&&pass.equals(password))
            return 1;
        else
            return -1;

    }
    public void logOut(){
        System.out.println("Log out!");
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getBalance() {
        return balance;
    }

    public void setBalance(int balance) {
        this.balance = balance;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
