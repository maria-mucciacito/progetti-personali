package com.infobasic.Models;

public class SoftwarePackage {
    private int id;
    private String name;
    private String description;
    private String category;
    private String product_code;

    public SoftwarePackage(int id, String name, String description, String category, String product_code) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.product_code = product_code;
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", name='" + getName() + "'" +
                ", description='" + getDescription() + "'" +
                ", category='" + getCategory() + "'" +
                ", product_code='" + getProduct_code() + "'" +
                "}";
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getProduct_code() {
        return this.product_code;
    }

    public void setProduct_code(String product_code) {
        this.product_code = product_code;
    }
}