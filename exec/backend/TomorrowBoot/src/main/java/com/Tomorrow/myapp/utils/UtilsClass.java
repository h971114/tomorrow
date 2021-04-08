package com.Tomorrow.myapp.utils;

public class UtilsClass {

    public UtilsClass() {
    }

    public static int getSalePrice(int price, int rate){
        return (price * (100-rate) / 100) / 100 * 100;
    }
}
