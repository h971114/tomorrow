package com.Tomorrow.myapp.model;

public class MenuDetailDto {
    private String id;
    private String menu_id;
    private String detail;

    public MenuDetailDto() {
    }

    public MenuDetailDto(String id, String menu_id, String detail) {
        super();
        this.id = id;
        this.menu_id = menu_id;
        this.detail = detail;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(String menu_id) {
        this.menu_id = menu_id;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }


}
