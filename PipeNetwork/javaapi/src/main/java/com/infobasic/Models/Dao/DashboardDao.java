package com.infobasic.Models.Dao;

import java.util.HashMap;

public interface DashboardDao {

    public HashMap<String, Integer> leadsBySource();

    public HashMap<String, Integer> dealsByState();

    public HashMap<String, Integer> tasksForMonth();

    public HashMap<String, Integer> tasksByState();
    
}
