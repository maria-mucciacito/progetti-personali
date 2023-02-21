package com.infobasic.Persistence;

import java.sql.*;

public class ConnectionManager {

    static Connection connection;
    private static String dbAddress = "jdbc:postgresql://lucky.db.elephantsql.com:5432/wgehueeb";
    private static String userName = "wgehueeb";
    private static String password = "vSyhvB1LzTa4v9pn9EmDvELoGpPVM8fm";

    public static Connection getConnetion() {

        if (connection != null)
            return connection;

        String driverClassName = "org.postgresql.Driver";

        try {
            Class.forName(driverClassName);

            connection = DriverManager.getConnection(dbAddress, userName, password);

            if (connection == null)
                System.out.println("Connection null");
            else
                System.out.println("Connection Established");

        } catch (ClassNotFoundException e) {

            e.printStackTrace();
        } catch (SQLException e) {

            e.printStackTrace();
        }

        return connection;

    }

}
