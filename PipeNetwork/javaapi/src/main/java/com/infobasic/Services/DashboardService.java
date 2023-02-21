package com.infobasic.Services;

import java.util.HashMap;

import com.infobasic.Models.Dao.Impl.DashboardDaoImpl;

public class DashboardService {
    HashMap<String, Integer> dict;
    DashboardDaoImpl dashboardDaoImpl;

    public DashboardService(){
        dashboardDaoImpl = new DashboardDaoImpl();
    }

    public HashMap<String, Integer> leadsBySource(){
        return dashboardDaoImpl.leadsBySource();
    }

    public HashMap<String, Integer> dealsByState(){
        return dashboardDaoImpl.dealsByState();
    }

    public HashMap<String, Integer> tasksByState(){
        return dashboardDaoImpl.tasksByState();
    }

    public HashMap<String, Integer> tasksForMonth(){
        return dashboardDaoImpl.tasksForMonth();
    }
    
}
