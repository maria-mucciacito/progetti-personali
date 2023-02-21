package com.infobasic.Models.Dao.Impl;

import com.infobasic.Models.Dao.DashboardDao;
import com.infobasic.Persistence.ConnectionManager;
import java.sql.*;
import java.util.HashMap;

public class DashboardDaoImpl implements DashboardDao {
    HashMap<String, Integer> dict;

    @Override
    public HashMap<String, Integer> leadsBySource() {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        dict = new HashMap<String, Integer>();
        try {
            String query = "SELECT source, COUNT(*) as leadbysource FROM public.lead GROUP BY source;";
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String source = resultSet.getString("source");
                int leads = resultSet.getInt("leadbysource");
                dict.put(source, leads);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dict;
    }

    @Override
    public HashMap<String, Integer> dealsByState() {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        dict = new HashMap<String, Integer>();
        try {
            String query = "SELECT state, COUNT(*) as dealbystate FROM public.deal GROUP BY state;";
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String state = resultSet.getString("state");
                int deals = resultSet.getInt("dealbystate");
                dict.put(state, deals);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dict;
    }

    @Override
    public HashMap<String, Integer> tasksForMonth() {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        dict = new HashMap<String, Integer>();
        try {
            String query = "SELECT DATE_PART('month',date) as \"mese\", COUNT(*) as tasks FROM public.task GROUP BY mese;";
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String mese = resultSet.getString("mese");
                int tasks = resultSet.getInt("tasks");
                dict.put(mese, tasks);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dict;
    }

    @Override
    public HashMap<String, Integer> tasksByState() {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        dict = new HashMap<String, Integer>();
        try {
            String query = "SELECT state, COUNT(*) as tasks FROM public.task GROUP BY state;";
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                String state = resultSet.getString("state");
                int tasks = resultSet.getInt("tasks");
                dict.put(state, tasks);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dict;

    }

}
